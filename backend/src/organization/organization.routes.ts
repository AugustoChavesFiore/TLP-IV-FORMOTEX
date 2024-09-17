import { Router } from "express";
import { OrganizationController } from "./organization.controller";
import { OrganizationService } from "./organization.service";
import { GetUserMiddleware } from "../middlewares/User.middleware";
import { UserService } from "../users/user.service";
import { ExpressValidatorAdapter } from "../helpers/express-validator";
import { OrganizationValidation } from "./schemas/organization-validation.schema";




export class OrganizationRoutes {


    static get routes(): Router {

        const router = Router();

        const organizationController = new OrganizationController(new OrganizationService());

        const userMiddleware = new GetUserMiddleware(new UserService());
        const GetUser = userMiddleware.getUser;
        const VerifyAdmin = userMiddleware.verifyAdmin;
        const validation = ExpressValidatorAdapter.validate;

        router.post('/', [GetUser, VerifyAdmin], OrganizationValidation, validation, organizationController.create);
        router.get('/', organizationController.findAll);
        router.get('/:id', organizationController.findOne);
        router.put('/:id', [GetUser, VerifyAdmin], OrganizationValidation, validation, organizationController.update);
        router.delete('/:id', [GetUser, VerifyAdmin], organizationController.delete);



        return router;
    };


};