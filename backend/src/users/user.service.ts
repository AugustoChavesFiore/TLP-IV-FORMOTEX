import { User } from "./entities/user";
import { IUser, IUserService } from "./interface/user.interface";
import { BcryptAdapter } from "../helpers/bcrypt";


export class UserService implements IUserService {


    async create(user: IUser): Promise<IUser> {
        const hashedPassword = await BcryptAdapter.hash(user.password!);
        const newUser = new User({ ...user, password: hashedPassword });
        return await newUser.save();
    };  

    async findAll(): Promise<IUser[]> {
        return await User.find();
    };

    async findOne(id: string): Promise<IUser> {
        const user = await User.findOne({ _id: id });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    };
    
    async findByEmail(email: string): Promise<IUser> {
        const  user = await User.findOne({ email })
        if (!user) throw new Error('User not found');
        return user;
    };

    async update(id: string, user: IUser): Promise<void> {
        const updatedUser = await User.updateOne({ _id: id }, user);
        if (updatedUser.modifiedCount === 0) throw new Error('User not found');

    };

    async updatePassword(id: string, password: string): Promise<void> {
        const hashedPassword = await BcryptAdapter.hash(password);
        const updatedUser = await User.updateOne({ _id: id }, { password: hashedPassword });
        if (updatedUser.modifiedCount === 0) throw new Error('User not found');
    };

    async changeRole(id: string, role: string): Promise<void> {
        const updatedUser = await User.updateOne({ _id: id }, { role });
        if (updatedUser.modifiedCount === 0) throw new Error('User not found');
    };

    async remove(id: string): Promise<void> {
        const deletedUser = await User.deleteOne({ _id: id });
        if (deletedUser.deletedCount === 0) throw new Error('User not found');
    };

};
