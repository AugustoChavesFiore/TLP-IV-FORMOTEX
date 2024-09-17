
import { Request, Response, Router } from 'express';
import { UsersRoutes } from '../users/user.routes';
import { AuthRoutes } from '../auth/auth.routes';
import { InventoryRoutes } from '../inventory/inventory.routes';
import { CategoryRoutes } from '../inventory-category/category.routes';
import { OrganizationRoutes } from '../organization/organization.routes';


export class AppRouter {
     static get routes(): Router {
          const router = Router();

          router.get('/', (req: Request, res: Response) => {
               res.send('Hello from Server whit Typescript and POO');
          });

          router.use('/auth', AuthRoutes.routes);
          router.use('/users', UsersRoutes.routes);
          router.use('/inventory-category', CategoryRoutes.routes);
          router.use('/inventory', InventoryRoutes.routes);
          router.use('/organization', OrganizationRoutes.routes);
          return router;
     };

};