import { UserService } from "../users/user.service";
import { IAuthService, LoginUser, LoginUserResponse } from "./interfaces/auth.interfaces";
import { JwtAdapter } from "../helpers/JWT";
import { BcryptAdapter } from "../helpers/bcrypt";
import { IUser } from "../users/interface";
import { CustomError } from "../errors/custom.errors";



export class AuthService implements IAuthService {
    constructor(
        private readonly userServices: UserService
    ) {
    };

    async login(loginUser: LoginUser): Promise<LoginUserResponse> {
        const user = await this.userServices.findByEmail(loginUser.email);
        if (!user) throw new Error('User not found');
        const isValidPassword = await BcryptAdapter.compare(loginUser.password, user.password!);
        if (!isValidPassword) throw CustomError.Unauthorized('Invalid password');
        const token = await JwtAdapter.generateToken({ id: user._id as string });
        if (!token) throw CustomError.InternalServer('Error generating token');
        user.password = undefined;
        return { user, token };
    };

    logout(): void {
        throw new Error("Method not implemented.");
    };

    async register(user: IUser): Promise<LoginUserResponse> {
        const newUser = await this.userServices.create(user);
        if (!newUser) throw CustomError.InternalServer('Error creating user');
        return this.checkToken(newUser);
    };

    async checkToken(user: IUser): Promise<LoginUserResponse> {
        const token = await JwtAdapter.generateToken({ id: user._id as string });
        if (!token) throw CustomError.InternalServer('Error generating token');
        user.password = undefined;
        return { user, token };
    };


};

