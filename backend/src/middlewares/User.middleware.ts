import { Request, Response, NextFunction } from "express";
import { JwtAdapter } from "../helpers/JWT";
import { UserService } from "../users/user.service";
import { IUser, ValidRoles } from "../users/interface";



export class GetUserMiddleware {
    constructor(
        private readonly userService: UserService
    ) {
    };

     getUser = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: 'Unauthorized' });
        const payload = await JwtAdapter.verifyToken<{id:string}>(token);
        if (!payload) return res.status(401).json({ message:  'Unauthorized' });
        const user = await this.userService.findOne(payload.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        req.user = user as IUser;
        next();
    };

    verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
        if (req.user!.role !== ValidRoles.ADMIN) return res.status(401).json({ message: 'Unauthorized' });
        next();
    };
}