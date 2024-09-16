import { Inventory, InventoryCreate } from "./inventory.interface";


export interface InventoryStore {
    inventory: Inventory[];
    loading: boolean;
    error: string;
    getInventories: () => Promise<void>;
    getInventory: (id: string) => Inventory | null;
    getByCategory: (id: string) => Promise<void>;
    createInventory: (inventory: InventoryCreate) => Promise<void>;
    updateInventory: (inventory: Inventory) => Promise<void>;
    deleteInventory: (id: string) => Promise<void>;
    handleError: (statusCode: number) => void;
    getToken: () => string;
};