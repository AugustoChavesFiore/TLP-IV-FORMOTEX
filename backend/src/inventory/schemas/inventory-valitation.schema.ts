import { body } from "express-validator";

export const InventoryValidation = [
    body('name').exists().withMessage('Name is required'),
    body('description').exists().withMessage('Description is required'),
    body('section').exists().withMessage('Section is required'),
    body('status').exists().withMessage('Status is required'),
    body('adquisitionDate').exists().withMessage('Adquisition Date is required'),
];


