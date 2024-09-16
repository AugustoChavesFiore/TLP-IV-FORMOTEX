import { Schema, model } from "mongoose";
import { ICategory } from "../interface/category.interface";


const CategorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.createdAt;
            delete ret.updatedAt;
            return ret;
        }
    }
});

export const Category = model('Category', CategorySchema);