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
        const authorization = req.headers.authorization;
        if(!authorization) return res.status(401).json({error:'Token is required'});
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({error:'Invalid token'});
        const token = authorization.split(' ').at(1) as string; 
        try {
            const decoded = await JwtAdapter.verifyToken<{id:string}>(token);
            if(!decoded) return res.status(401).json({error:'Invalid token'});
            const user = await this.userService.findOne(decoded.id);
            if(!user) return res.status(401).json({error:'Invalid token'});
            req.user = user as IUser;
            next();
            
        } catch (error) {

            return res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
        if (req.user!.role !== ValidRoles.ADMIN) return res.status(401).json({ message: 'Unauthorized' });
        next();
    };
}