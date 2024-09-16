import { Router } from "express";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";




export class CategoryRoutes {


    static get routes(): Router {

        const router = Router();

        const categoryController = new CategoryController(new CategoryService());
        
        router.get('/', categoryController.findAll);
        router.get('/:id', categoryController.findOne);
        router.post('/', categoryController.create);
        router.put('/:id', categoryController.update);
        router.delete('/:id', categoryController.delete);

        return router;
    };


};