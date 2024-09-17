import { Request, Response } from "express";
import { OrganizationService } from "./organization.service";
import { CustomError } from "../errors/custom.errors";


export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) { };

    handleErrors(error: any, res: Response) {
        if (error.code === 11000) return res.status(409).json({ error: 'Organization already exists' });

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    create = async (req: Request, res: Response) => {
        try {
            const organization = await this.organizationService.create(req.body);
            res.status(201).json(organization);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const organizations = await this.organizationService.findAll();
            res.status(200).json(organizations);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const organization = await this.organizationService.findOne(req.params.id);
            res.status(200).json(organization);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    update = async (req: Request, res: Response) => {
        try {
            await this.organizationService.update(req.params.id, req.body);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    delete = async (req: Request, res: Response) => {
        try {
            await this.organizationService.remove(req.params.id);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };



};