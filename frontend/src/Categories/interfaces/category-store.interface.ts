import { Category, CategoryCreate } from "./category.interface";


export interface CategoryStore {
    cagegories: Category[];
    isLoading: boolean;
    addCategory: (category:CategoryCreate) => Promise<void>;
    getCategories: () => Promise<void>;
    deleteCategory: (id: string) => Promise<void>;
    updateCategory: (category: Category) => Promise<void>;
    getCategory: (id: string) => Category | undefined;
    handleError: (statusCode: number) => void;

};