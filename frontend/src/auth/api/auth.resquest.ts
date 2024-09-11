import httpClientAdapter from "@/adapters/httpClient.adapter";
import { AuthResponse, Auth } from "@/auth/interfaces/auth.interface";

export class AuthRequest {

    private static baseUrl = 'http://localhost:4500/api';

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
                Authorization: `${token}`
            }
        });
        return response;
    };


}