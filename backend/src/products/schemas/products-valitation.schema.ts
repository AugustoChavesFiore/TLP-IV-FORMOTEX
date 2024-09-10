import { body } from "express-validator";

export const ProductValidation = [
    body('name').isString().isLength({ min: 3, max: 100 }).withMessage('Name is required'),
    body('price').isNumeric().withMessage('Price is required'),
    body('description').isString().isLength({ min: 3, max: 100 }).withMessage('Description is required'),
    body('category').isString().isLength({ min: 3, max: 100 }).withMessage('Category is required'),
    body('ubication').isString().isLength({ min: 3, max: 100 }).withMessage('Ubication is required'),
];


