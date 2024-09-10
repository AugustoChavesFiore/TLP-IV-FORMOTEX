import { Response, Request } from "express";
import { ProductsService } from "./products.service";

export class ProductsController {
    constructor(
        private readonly productService: ProductsService
    ) { }

    handleError = (error: any, res: Response) => {
        if (error instanceof Error) return res.status(400).json({ error: error.message });
        if (error.code === 11000) return res.status(400).json({ error: 'Products already exists' });
        return res.status(500).json({ error: 'Internal Server Error' });
    };

    createProduct = async (req: Request, res: Response): Promise<Response> => {
        try {            
            const product = await this.productService.createProduct(req.body, req.params.idCategory);
            return res.status(201).json(product);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    getProducts = async (req: Request, res: Response): Promise<Response> => {
        try {
            const products = await this.productService.getProducts();
            return res.status(200).json(products);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    getProduct = async (req: Request, res: Response): Promise<Response> => {
        try {
            const product = await this.productService.getProduct(req.params.id);
            return res.status(200).json(product);
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    updateProduct = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.productService.updateProduct(req.params.id, req.body);
            return res.status(204).json();
        } catch (error) {
            return this.handleError(error, res);
        }
    };

    deleteProduct = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.productService.deleteProduct(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return this.handleError(error, res);
        }
    };
}
