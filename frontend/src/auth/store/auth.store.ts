import { create } from 'zustand';
import { AuthStore } from '../interfaces/auth-store.interface';
import { AuthRequest } from '../api/auth.resquest';
import { handleStatusErrors } from '../utils/handleStatusCode';
import toast from 'react-hot-toast';

export const useAuthStore = create<AuthStore>((set, get) => ({

    user: undefined,
    isLoading: false,
    token: '',

    register: async (user) => {
        set({ isLoading: true });
        const response = await AuthRequest.register(user);
        if (response.status === 200) return get().handleLogin(response.data);
        get().handleError(response.status);
    },

    login: async (user) => {
        set({ isLoading: true });
        const response = await AuthRequest.login(user);
        if (response.status === 200) return get().handleLogin(response.data);
        get().handleError(response.status);
    },

    handleLogin: (userResponseApi) => {
        toast.success(`Bienvenido ${userResponseApi.user.name}`);
        get().setLocalStorage(userResponseApi.token);
        set({ user: userResponseApi.user, token: userResponseApi.token, isLoading: false });
    },

    logout: () => {
        set({ user: undefined, token: '' });
        localStorage.removeItem('token');
    },

    checkAuth: async () => {
        set({ isLoading: true });
        const token = localStorage.getItem('token');
        if (!token) return get().logout();
        const response = await AuthRequest.checkAuth(token);
        if (response.status === 200) return get().handleLogin(response.data);
        get().handleError(response.status);
        return get().logout();

    },

    setLocalStorage: (token) => {
        localStorage.setItem('token', token);
    },

    handleError: (statusCode: number) => {
        handleStatusErrors(statusCode);
        get().logout();
        set({ isLoading: false });
    },


}));