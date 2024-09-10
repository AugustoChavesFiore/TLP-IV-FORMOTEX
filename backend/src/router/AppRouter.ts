
import { Request, Response, Router } from 'express';
import { UsersRoutes } from '../users/user.routes';
import { AuthRoutes } from '../auth/auth.routes';


export class AppRouter {
   static get routes(): Router {
        const router = Router();


        router.get('/', (req:Request, res:Response) => {
             res.send('Hello from Server whit Typescript and POO');
        });

        router.use('/auth', AuthRoutes.routes);
        router.use('/users', UsersRoutes.routes);
        
        


        return router;
   };

};