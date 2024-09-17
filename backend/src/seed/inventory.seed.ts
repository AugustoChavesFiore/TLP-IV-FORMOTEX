import { enviroments } from "../config/envs";
import { CategoryService } from "../inventory-category/category.service";
import { InventoryService } from "../inventory/inventory.service";
import { ICategory } from '../inventory-category/interface/category.interface'

export class InventorySeed {
    constructor(
        private readonly inventoryService: InventoryService,
        private readonly categoryService: CategoryService
    ) { };

    async inventorySeed() {
        if (enviroments.ENVIROMENT !== 'develoment') return
        const categories: ICategory[] = await this.categoryService.findAll();

    

    }

};