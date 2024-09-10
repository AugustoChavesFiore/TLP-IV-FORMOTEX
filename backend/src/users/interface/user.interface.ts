import { Document } from "mongoose";


export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role?: string;
};

export interface IUserService {
    create(user: IUser): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findOne(id: string): Promise<IUser>;
    update(id: string, user: IUser): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
    changeRole(id: string, role: string): Promise<void>;
    remove(id: string): Promise<void>;
};


