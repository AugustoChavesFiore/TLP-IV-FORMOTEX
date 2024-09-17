import httpClientAdapter from "@/adapters/httpClient.adapter";
import { Organization, OrganizationCreate } from "../interface/organization.interface";

export class OrganizationRequests {
    private static baseUrl = import.meta.env.VITE_API_URL;
    static async getOrganizations() {
        const response = await httpClientAdapter.get<Organization[]>(`${this.baseUrl}/organization`);
        return response;
    };

    static async getOrganizationItem(id: string) {
        const response = await httpClientAdapter.get<Organization>(`${this.baseUrl}/organization/${id}`);
        return response;
    };


    static async createOrganizationItem(organization: OrganizationCreate, token: string) {
        const response = await httpClientAdapter.post<Organization>(`${this.baseUrl}/organization`, organization, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };

    static async updateOrganizationItem(organization: Organization, token: string) {
        const response = await httpClientAdapter.put(`${this.baseUrl}/organization/${organization._id}`, organization, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };

    static async deleteOrganizationItem(id: string, token: string) {
        const response = await httpClientAdapter.delete(`${this.baseUrl}/organization/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };

};
