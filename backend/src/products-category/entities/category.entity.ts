import { Schema, model } from "mongoose";


const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export const Category = model('Category', CategorySchema);