import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { CustomError } from "../errors/custom.errors";



export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {
    };

    handleErrors(error: any, res: Response) {
        
        if (error.code === 11000) {
            return res.status(400).json({ message: 'User with that email already exists' });
        } 
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message});
        }else{
            return res.status(500).json({error:'Internal Server Error'});
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const login = await this.authService.login(req.body);
            res.status(200).json(login);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    register = async (req: Request, res: Response) => {
        try {
            const register = await this.authService.register(req.body);
            res.status(200).json(register);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    checkToken = async (req: Request, res: Response) => {
        try {
            const checkToken = await this.authService.checkToken(req.user!);
            res.status(200).json(checkToken);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };
};