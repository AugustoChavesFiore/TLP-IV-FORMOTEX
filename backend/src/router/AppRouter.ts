
import { Request, Response, Router } from 'express';
import { UsersRoutes } from '../users/user.routes';
import { AuthRoutes } from '../auth/auth.routes';
import { ProductsRoutes } from '../products/products.routes';
import { CategoryRoutes } from '../products-category/category.routes';


export class AppRouter {
   static get routes(): Router {
        const router = Router();
        
        router.get('/', (req:Request, res:Response) => {
             res.send('Hello from Server whit Typescript and POO');
        });

        router.use('/auth', AuthRoutes.routes);
        router.use('/users', UsersRoutes.routes);
        router.use('/products-category', CategoryRoutes.routes);
        router.use('/products', ProductsRoutes.routes);

        return router;
   };

};