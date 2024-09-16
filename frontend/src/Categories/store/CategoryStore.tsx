import { create } from 'zustand';
import { CategoryStore } from '../interfaces/';
import { handleStatusErrors } from '@/Categories/utils/handleStatusCode';
import { CategoryRequests } from '../api/CategoryRequets';
import toast from 'react-hot-toast';



export const useCategoryStore = create<CategoryStore>((set, get) => ({
    cagegories: [],
    isLoading: false,
    addCategory: async (category) => {
        set({ isLoading: true });
        const response = await CategoryRequests.createCategory(category);
        if (response.status === 201) {
            set({ isLoading: false, cagegories: [...get().cagegories, response.data] });
            toast.success('Categoria creada');
            return;
        }
        get().handleError(response.status);

    },

    getCategories: async () => {
        set({ isLoading: true });
        const response = await CategoryRequests.getCategories();
        if (response.status === 200) {
            return set({ isLoading: false, cagegories: response.data });
        };
        get().handleError(response.status);

    },

    getCategory: (id) => {
        set({ isLoading: true });
        const category = get().cagegories.find((category) => category._id === id);
        if (category) {
            set({ isLoading: false });
            return category;
        };
        return undefined;
    },

    deleteCategory: async (id) => {
        set({ isLoading: true });
        const response = await CategoryRequests.deleteCategory(id);
        console.log(response.status);
        if (response.status === 204) {
            const newCategories = get().cagegories.filter((category) => category._id !== id);
            set({ isLoading: false, cagegories: newCategories });
            toast.success('Categoria eliminada');
            return;
        }
        get().handleError(response.status);

    },

    updateCategory: async (category) => {
        set({ isLoading: true });
        const response = await CategoryRequests.updateCategory(category);
        if (response.status === 204) {
            const newCategories = get().cagegories.map((cat) => {
                if (cat._id === category._id) {
                    return category;
                }
                return cat;
            });
            set({ isLoading: false, cagegories: newCategories });
            toast.success('Categoria actualizada');
            return;
        };
        get().handleError(response.status);

    },

    handleError: (statusCode: number) => {
        handleStatusErrors(statusCode);
        set({ isLoading: false });
    },

}));