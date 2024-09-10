import { Document } from "mongoose";

export interface IProductService {
    createProduct(product: IProduct): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
    getProduct(id: string): Promise<IProduct>;
    updateProduct(id: string, product: IProduct): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}

export interface IProduct extends Document {
    name: string;
    price: number;
    stock: number;
    description: string;
    image?: string | null;
    category: string;
    ubication: string;
};

