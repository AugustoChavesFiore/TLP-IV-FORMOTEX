import { Router } from 'express';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ExpressValidatorAdapter } from '../helpers/express-validator';
import { createUserSchema, changePasswordSchema, changeRoleSchema, updateUserSchema } from './schemas/user.schemas';

export class UsersRoutes {


    static get routes(): Router {

        const router = Router();

        const userServices = new UserService();
        const userController = new UserController(userServices);
        const validator = ExpressValidatorAdapter.validate;

        router.get('/', userController.findAll);
        router.get('/:id', userController.findOne);
        router.post('/', createUserSchema, validator, userController.create);
        router.put('/:id', updateUserSchema, validator, userController.update);
        router.delete('/:id', userController.remove);


        return router;
    };


};
