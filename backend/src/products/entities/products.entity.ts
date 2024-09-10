import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

export const Product = model('Product', ProductSchema);