import { Document } from "mongoose";


export interface ICategory extends Document {
    name: string;
    description: string;
};

export interface ICategoryService {
    findAll(): Promise<ICategory[]>;
    findOne(id: string): Promise<ICategory>;
    create(category: ICategory): Promise<ICategory>;
    update(id: string, category: ICategory): Promise<void>;
    delete(id: string): Promise<void>;
};


