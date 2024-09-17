
import { ObjectId } from "mongodb";

export interface IInventoryService {
    createInventory(inventory: IInventory, idCategory: string, idOrganization: string): Promise<IInventory>;
    getInventories(): Promise<IInventory[]>;
    getInventory(id: string): Promise<IInventory>;
    getInventoriesByCategory(idCategory: string): Promise<IInventory[]>;
    updateInventory(id: string, inventory: IInventory): Promise<void>;
    deleteInventory(id: string): Promise<void>;
}

export interface IInventory {
    name: string;
    description: string;
    section: string;
    status: string;
    adquisitionDate: Date;
    category: ObjectId;
    organization: ObjectId;
};

