import { Server } from "./server";
import { AppRouter } from "./router/AppRouter";
import { enviroments } from "./config/envs";
import { DB } from "./database/db";

(
    async () => {
        const server = new Server({
            port: enviroments.port,
            routes: AppRouter.routes
        });
        const db = new DB({
            mongoUrl: enviroments.MONGO_URL!,
            dbName: enviroments.DB_NAME!
        });
        await db.connect();
        server.start();
    }
)()