import httpClientAdapter from "@/adapters/httpClient.adapter";
import { Inventory, InventoryCreate } from "../interface/inventory.interface";

export class InventoryRequests {
    private static baseUrl = import.meta.env.VITE_API_URL;

    static async getInventory() {
        const response = await httpClientAdapter.get<Inventory[]>(`${this.baseUrl}/inventory`);
        return response;
    };

    static async getInventoryItem(id: string) {
        const response = await httpClientAdapter.get<Inventory>(`${this.baseUrl}/inventory/${id}`);
        return response;
    };

    static async getInventoryByCategory(id: string) {
        const response = await httpClientAdapter.get<Inventory[]>(`${this.baseUrl}/inventory/${id}`);
        return response;
    };

    static async createInventoryItem(product: InventoryCreate, idCategory: string, token: string) {
        const response = await httpClientAdapter.post<Inventory>(`${this.baseUrl}/inventory/${idCategory}`, product, {
            headers: {
                Authorization: `${token}`
            }
        }
        );
        return response
    };

    static async updateInventoryItem(product: Inventory, token: string) {
        const response = await httpClientAdapter.put(`${this.baseUrl}/inventory/${product._id}`, product,
            {
                headers: {
                    Authorization: `${token}`
                }
            }
        );
        return response;
    };

    static async deleteInventoryItem(id: string, token: string) {
        const response = await httpClientAdapter.delete(`${this.baseUrl}/inventory/${id}`,
            {
                headers: {
                    Authorization: `${token}`
                }
            }
        );
        return response;
    };
};
