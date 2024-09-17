import { Router } from 'express';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ExpressValidatorAdapter } from '../helpers/express-validator';
import { createUserSchema, changePasswordSchema, changeRoleSchema, updateUserSchema } from './schemas/user.schemas';
import { GetUserMiddleware } from '../middlewares/User.middleware';

export class UsersRoutes {


    static get routes(): Router {

        const router = Router();

        const userServices = new UserService();
        const userController = new UserController(userServices);
        const validator = ExpressValidatorAdapter.validate;
        const userMiddleware = new GetUserMiddleware(new UserService());
        const GetUser = userMiddleware.getUser;
        const VerifyAdmin = userMiddleware.verifyAdmin;

        router.get('/', userController.findAll);
        router.get('/:id', userController.findOne);
        router.post('/', [GetUser,VerifyAdmin], createUserSchema, validator, userController.create);
        router.put('/:id', [GetUser,VerifyAdmin], updateUserSchema, validator, userController.update);
        router.delete('/:id', [GetUser,VerifyAdmin], userController.remove);


        return router;
    };


};
