import httpClientAdapter from "@/adapters/httpClient.adapter";
import { AuthResponse, Auth } from "@/auth/interfaces/auth.interface";

export class AuthRequest {

    private static baseUrl = import.meta.env.VITE_API_URL;

    static async login(auth: Auth) {
        const response = await httpClientAdapter.post<AuthResponse>(`${this.baseUrl}/auth/login`, auth);
        return response;
    };

    static async register(auth: Auth) {
        const response = await httpClientAdapter.post<AuthResponse>(`${this.baseUrl}/auth/register`, auth);
        return response;
    };

    static async checkAuth(token: string) {
        const response = await httpClientAdapter.get<AuthResponse>(`${this.baseUrl}/auth/checkToken`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };


}