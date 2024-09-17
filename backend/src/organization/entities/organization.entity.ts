import { Schema, model } from "mongoose";

import { IOrganization } from "../interface/organization.interface";

const OrganizationSchema = new Schema<IOrganization>({
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true }
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

export const Organization = model('Organization', OrganizationSchema);