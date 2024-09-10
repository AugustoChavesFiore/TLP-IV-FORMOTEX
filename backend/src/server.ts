import express, { Router, Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

interface IServer {
    start(): void;

}
interface IServerConfig {
    port: number;
    routes: Router;
}


export class Server implements IServer {

    private readonly app: Application = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor({ port, routes }: IServerConfig) {
        this.port = port;
        this.routes = routes
        this.middlewares();
    };

    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use('/api',this.routes);
    };

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on  http://localhost:${this.port}`);
        });
    };


}