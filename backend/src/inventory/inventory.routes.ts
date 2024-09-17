import { Router } from 'express';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { ExpressValidatorAdapter } from '../helpers/express-validator';
import { InventoryUpdateValidation, InventoryValidation } from './schemas/inventory-valitation.schema';
import { GetUserMiddleware } from '../middlewares/User.middleware';
import { UserService } from '../users/user.service';

export class InventoryRoutes {

    static get routes(): Router {

        const router = Router();

        const inventoryController = new InventoryController(new InventoryService());
        const validation = ExpressValidatorAdapter.validate;
        const userMiddleware = new GetUserMiddleware(new UserService());
        const GetUser = userMiddleware.getUser;
        const VerifyAdmin = userMiddleware.verifyAdmin;
        router.post('/:idCategory/:idOrganization', [GetUser, VerifyAdmin], InventoryValidation, validation, inventoryController.createInventory);
        router.get('/', inventoryController.getInventories);
        router.get('/:id', inventoryController.getInventory);
        router.get('/category/:idCategory', inventoryController.getInventoriesByCategory);
        router.put('/:id', [GetUser, VerifyAdmin], InventoryUpdateValidation, validation, inventoryController.updateInventory);
        router.delete('/:id', [GetUser, VerifyAdmin], inventoryController.deleteInventory);

        return router;
    };

};
