import { User } from './users/entities/user';
import { IUser } from './users/interface';

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
};