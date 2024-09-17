import { body } from "express-validator";

export const categoryValidation = [
    body('name').exists().withMessage('Name is required'),
    body('description').exists().withMessage('Description is required'),
];