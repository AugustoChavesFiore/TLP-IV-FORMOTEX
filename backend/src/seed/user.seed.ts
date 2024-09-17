import { IUser, ValidRoles } from "../users/interface";
import { UserService } from "../users/user.service";

import { enviroments } from '../config/envs';

class UserSeed {

    constructor(
        private readonly userServices: UserService,
    ) {
    };

    private users: IUser[] = [
        {
            name: enviroments.ADMIN_NAME!,
            email: enviroments.ADMIN_EMAIL!,
            password: enviroments.ADMIN_PASSWORD,
            role: ValidRoles.ADMIN,
        },
        {
            name: 'Jane Doe',
            email: 'test@user.com',
            password: 'Test123',
        },
    ];

    async seed() {
        const existingUsers = await this.userServices.findAll();
        if (existingUsers.length === 0) {
            await Promise.all(
                this.users.map(async user => {
                    await this.userServices.create(user);
                })
            );
        };

    };


};

const userServices= new UserService();
export const userSeed= new UserSeed(userServices);
