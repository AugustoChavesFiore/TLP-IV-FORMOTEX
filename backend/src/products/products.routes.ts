import { Router } from 'express';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ExpressValidatorAdapter } from '../helpers/express-validator';
import { ProductValidation } from './schemas/products-valitation.schema';
import { GetUserMiddleware } from '../middlewares/User.middleware';
import { UserService } from '../users/user.service';


export class ProductsRoutes {


    static get routes(): Router {

        const router = Router();

        const productsController = new ProductsController(new ProductsService());
        const validation = ExpressValidatorAdapter.validate;
        const userMiddleware = new GetUserMiddleware(new UserService());
        const GetUser = userMiddleware.getUser;
        const VerifyAdmin = userMiddleware.verifyAdmin;
        router.post('/:idCategory', [GetUser, VerifyAdmin], ProductValidation, validation, productsController.createProduct);
        router.get('/', productsController.getProducts);
        router.get('/:id', productsController.getProduct);
        router.get('/category/:idCategory', productsController.getProductsByCategory);
        router.put('/:id',  [GetUser, VerifyAdmin], ProductValidation, validation, productsController.updateProduct);
        router.delete('/:id',  [GetUser, VerifyAdmin], productsController.deleteProduct);


        return router;
    };


};
