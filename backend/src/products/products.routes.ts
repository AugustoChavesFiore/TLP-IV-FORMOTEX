import { Router } from 'express';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ExpressValidatorAdapter } from '../helpers/express-validator';
import { ProductValidation } from './schemas/products-valitation.schema';


export class ProductsRoutes {


    static get routes(): Router {

        const router = Router();

        const productsController = new ProductsController(new ProductsService());
        const validation = ExpressValidatorAdapter.validate;

        router.post('/', ProductValidation, validation, productsController.createProduct);
        router.get('/', productsController.getProducts);
        router.get('/:id', productsController.getProduct);
        router.put('/:id', ProductValidation, validation, productsController.updateProduct);
        router.delete('/:id', productsController.deleteProduct);


        return router;
    };


};
