import { Inventory } from "./entities/inventory.interface";
import { IInventoryService, IInventory } from "./interfaces/inventory.interface";
import { ObjectId } from "mongodb";

export class InventoryService implements IInventoryService {

    async createInventory(inventory: IInventory, idCategory: string): Promise<IInventory> {
        const newInventory = new Inventory({ ...inventory, category: new ObjectId(idCategory) });
        return await newInventory.save();
    };

    async getInventories(): Promise<IInventory[]> {
        return await Inventory.find()
    };

    async getInventory(id: string): Promise<IInventory> {
        const inventory = await Inventory.findOne({ _id: id })

        if (!inventory) throw new Error('Inventory not found');
        return inventory;
    };

    async getInventoriesByCategory(idCategory: string): Promise<IInventory[]> {
        return await Inventory.find({ category: idCategory })
    };

    async updateInventory(id: string, inventory: IInventory): Promise<void> {
        const updatedInventory = await Inventory.updateOne({ _id: id }, inventory);
        if (updatedInventory.modifiedCount === 0) throw new Error('Inventory not found');
    };

    async deleteInventory(id: string): Promise<void> {
        const deletedInventory = await Inventory.deleteOne({ _id: id });
        if (deletedInventory.deletedCount === 0) throw new Error('Inventory not found');
    };
};
