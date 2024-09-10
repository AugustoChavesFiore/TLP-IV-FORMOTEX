import { IUser } from "../../users/interface";



export interface IAuthService {
    login( user:LoginUser): Promise<LoginUserResponse>;
    logout(): void;
    register(user:IUser): Promise<LoginUserResponse>;
    checkToken(user:IUser): Promise<LoginUserResponse>;
};

export interface LoginUser {
    email: string;
    password: string;
};

export interface LoginUserResponse {
    user: IUser;
    token: string;
};

export interface RegisterUser {
    email: string;
    password: string;
};


