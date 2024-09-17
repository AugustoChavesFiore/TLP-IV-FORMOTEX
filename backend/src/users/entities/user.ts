
import { Schema, model } from "mongoose";
import { IUser, ValidRoles } from "../interface";



const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: ValidRoles.USER,
    },

},{
    timestamps: true,
    versionKey: false,
});



export const User = model('User', UserSchema);

