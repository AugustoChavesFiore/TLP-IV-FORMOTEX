import { Response, Request } from "express";
import { InventoryService } from "./inventory.service";
import { CustomError } from "../errors/custom.errors";

export class InventoryController {
    constructor(
        private readonly inventoryService: InventoryService
    ) { }

    handleError = (error: any, res: Response) => {
        if (error.code == 11000) return res.status(409).json({ error: 'Inventory already exists' });
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message});
        }else{
            return res.status(500).json({error:'Internal Server Error'});
        }
    };

    createInventory = async (req: Request, res: Response): Promise<Response> => {
        const { idCategory, idOrganization } = req.params;	
        try {            
            const inventory = await this.inventoryService.createInventory(req.body, idCategory, idOrganization);
            return res.status(201).json(inventory);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    getInventories = async (req: Request, res: Response): Promise<Response> => {
        try {
            const inventories = await this.inventoryService.getInventories();
            return res.status(200).json(inventories);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    getInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            const inventory = await this.inventoryService.getInventory(req.params.id);
            return res.status(200).json(inventory);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    getInventoriesByCategory = async (req: Request, res: Response): Promise<Response> => {
        try {
            const inventories = await this.inventoryService.getInventoriesByCategory(req.params.idCategory);
            return res.status(200).json(inventories);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    updateInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.inventoryService.updateInventory(req.params.id, req.body);
            return res.status(204).json();
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    deleteInventory = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.inventoryService.deleteInventory(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return this.handleError(error, res);
        }
    };
}
