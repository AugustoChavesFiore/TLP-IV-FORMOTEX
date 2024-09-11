import { Auth, AuthResponse, User } from "./auth.interface";


export interface AuthStore {
    user: User | undefined;
    isLoading: boolean;
    token: string;
    register: ( user: Auth ) => void;
    login: ( user: Auth ) => void;
    logout: () => void;
    checkAuth: () => void;
    setLocalStorage: ( token: string ) => void;
    handleError: (statusCode: number) => void;
    handleLogin: ( userResponseApi: AuthResponse ) => void;
}