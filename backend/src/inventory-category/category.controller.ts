import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { CustomError } from "../errors/custom.errors";


export class CategoryController {
    constructor(private categoryService: CategoryService) { };

    handleErrors(error: any, res: Response) {
        if (error.code === 11000) return res.status(409).json({ error: 'Category already exists' });
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message});
        }else{
            return res.status(500).json({error:'Internal Server Error'});
        }
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const categories = await this.categoryService.findAll();
            res.status(200).json(categories);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const category = await this.categoryService.findOne(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    create = async (req: Request, res: Response) => {
        try {
            const category = await this.categoryService.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    update = async (req: Request, res: Response) => {
        try {
            await this.categoryService.update(req.params.id, req.body);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    delete = async (req: Request, res: Response) => {
        try {
            await this.categoryService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

};