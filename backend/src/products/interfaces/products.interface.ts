import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IProductService {
    createProduct(product: IProduct, idCategory: string): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
    getProduct(id: string): Promise<IProduct>;
    getProductsByCategory(idCategory: string): Promise<IProduct[]>;
    updateProduct(id: string, product: IProduct): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}

export interface IProduct extends Document {
    name: string;
    price: number;
    stock: number;
    description: string;
    image?: string | null;
    category: ObjectId;
    ubication: string;
};

