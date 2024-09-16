import { create } from 'zustand';
import { InventoryStore } from '../interface/inventory-store.interface';
import { InventoryRequests } from '../api/inventoryRequests';
import { handleStatusErrors } from '../utils/handleStatusCode';
import toast from 'react-hot-toast';

export const useInventoryStore = create<InventoryStore>((set, get) => ({
    inventory: [],
    loading: false,
    error: '',

    getInventories: async () => {
        set({ loading: true });

        const response = await InventoryRequests.getInventory();
        if (response.status === 200) return set({ inventory: response.data, loading: false });
        get().handleError(response.status);
    },

    getInventory: (id: string) => {
        set({ loading: true });
        const inventory = get().inventory.find((inv) => inv._id === id);
        if (!inventory) {
            set({ loading: false });
            get().handleError(404);
            return null
        };
        set({ loading: false });
        return inventory;
    },

    getByCategory: async (id: string) => {
        set({ loading: true });
        const response = await InventoryRequests.getInventoryByCategory(id);
        if (response.status === 200) return set({ inventory: response.data, loading: false });
        get().handleError(response.status);
    },

    createInventory: async (inventory) => {
        set({ loading: true });
        const response = await InventoryRequests.createInventoryItem({ ...inventory }, inventory.category, get().getToken());
        if (response.status === 201) {
            set({ inventory: [...get().inventory, response.data], loading: false });
            toast.success('Producto creado');
            return 
        };
        get().handleError(response.status);
    },

    updateInventory: async (inventory) => {
        set({ loading: true });
        const response = await InventoryRequests.updateInventoryItem(inventory, get().getToken());
        if (response.status === 204) {
            const newInventory = get().inventory.map((inv) => {
                if (inv._id === inventory._id) {
                    return inventory;
                }
                return inv;
            });
            set({ inventory: newInventory, loading: false });
            toast.success('Producto actualizado');
            return;
        };
        get().handleError(response.status);
    },

    deleteInventory: async (id) => {
        set({ loading: true });
        const response = await InventoryRequests.deleteInventoryItem(id, get().getToken());
        if (response.status === 204) {
            const newInventory = get().inventory.filter((inv) => inv._id !== id);
            set({ inventory: newInventory, loading: false });
            toast.success('Producto eliminado');
            return;
        };
        get().handleError(response.status);
    },

    handleError: (statusCode) => {
        handleStatusErrors(statusCode);
        set({ loading: false });
    },

    getToken: () => {
        const token = localStorage.getItem('token');
        if (!token) {
            get().handleError(401);
            return '';
        }
        return token;
    }
}));