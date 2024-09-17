import { body } from "express-validator";


export const OrganizationValidation = [
    body('name').exists().withMessage('Name is required'),
    body('address').exists().withMessage('Address is required'),
    body('phone').exists().withMessage('Phone is required'),
    body('email').exists().isEmail().withMessage('Email is required'),
];