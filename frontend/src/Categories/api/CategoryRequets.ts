import httpClientAdapter from "@/adapters/httpClient.adapter";
import { CategoryCreate, Category } from "../interfaces/category.interface";




export class CategoryRequests {
    private static baseUrl = import.meta.env.VITE_API_URL;

    static async getCategories() {
        const response = await httpClientAdapter.get<Category[]>(`${this.baseUrl}/inventory-category`);
        return response;
    };

    static async getCategory(id: string) {
        const response = await httpClientAdapter.get<Category>(`${this.baseUrl}/inventory-category/${id}`);
        return response;
    };

    static async createCategory(category: CategoryCreate, token: string) {
        const response = await httpClientAdapter.post<Category>(`${this.baseUrl}/inventory-category`, category, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };

    static async updateCategory(category: Category, token: string) {
        const response = await httpClientAdapter.put(`${this.baseUrl}/inventory-category/${category._id}`, category, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };

    static async deleteCategory(id: string, token: string) {
        const response = await httpClientAdapter.delete(`${this.baseUrl}/inventory-category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };
};