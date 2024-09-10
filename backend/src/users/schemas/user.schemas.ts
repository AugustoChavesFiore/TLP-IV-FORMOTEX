import { body } from "express-validator";

export const createUserSchema = [
    body("name").exists().withMessage("Name is required"),
    body("email").exists().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

export const updateUserSchema = [
    body("name").exists().withMessage("Name is required"),
    body("email").exists().withMessage("Email is required"),
];

export const changePasswordSchema = [
    body("oldPassword").exists().withMessage("Old password is required"),
    body("newPassword").isLength({ min: 6 }).withMessage("New password must be at least 6 characters"),
];


export const changeRoleSchema = [
    body("role").exists().withMessage("Role is required"),
];