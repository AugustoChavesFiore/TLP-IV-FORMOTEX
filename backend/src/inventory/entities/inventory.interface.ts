import { Schema, model } from "mongoose";
import { IInventory } from "../interfaces/inventory.interface";


const InventorySchema = new Schema<IInventory>({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    adquisitionDate: {
        type: Date,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    }
  

},
{
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.createdAt;
            delete ret.updatedAt;
            return ret;
        }
    }
});

export const Inventory = model('Inventory', InventorySchema);