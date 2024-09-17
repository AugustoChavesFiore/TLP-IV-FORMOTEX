import { body } from "express-validator";

export const InventoryValidation = [
    body('name').exists().withMessage('Name is required'),
    body('description').exists().withMessage('Description is required'),
    body('section').exists().withMessage('Section is required'),
    body('status').exists().withMessage('Status is required'),
    body('adquisitionDate').exists().withMessage('Adquisition Date is required'),
];


export const InventoryUpdateValidation = [
    body('name').exists().withMessage('Name is required'),
    body('description').exists().withMessage('Description is required'),
    body('section').exists().withMessage('Section is required'),
    body('status').exists().withMessage('Status is required'),
    body('adquisitionDate').exists().withMessage('Adquisition Date is required'),
    body('idCategory').exists().withMessage('Category is required'),
    body('idOrganization').exists().withMessage('Organization is required'),
];

