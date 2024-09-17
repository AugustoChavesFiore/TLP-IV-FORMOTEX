import { Router } from "express";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { GetUserMiddleware } from "../middlewares/User.middleware";
import { UserService } from "../users/user.service";
import { ExpressValidatorAdapter } from "../helpers/express-validator";
import { categoryValidation } from "./schemas/category-validation.schema";




export class CategoryRoutes {


    static get routes(): Router {

        const router = Router();

        const categoryController = new CategoryController(new CategoryService());
        const userMiddleware = new GetUserMiddleware(new UserService());
        const GetUser = userMiddleware.getUser;
        const VerifyAdmin = userMiddleware.verifyAdmin;
        const validate = ExpressValidatorAdapter.validate

        router.get('/', categoryController.findAll);
        router.get('/:id', categoryController.findOne);
        router.post('/', [GetUser, VerifyAdmin], categoryValidation, validate, categoryController.create);
        router.put('/:id', [GetUser, VerifyAdmin], categoryValidation, validate, categoryController.update);
        router.delete('/:id', [GetUser, VerifyAdmin], categoryController.delete);

        return router;
    };


};