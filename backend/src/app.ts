import { Server } from "./server";
import { AppRouter } from "./router/AppRouter";
import { enviroments } from "./config/envs";
import { DB } from "./database/db";
import { userSeed } from "./seed/user.seed";
import { categorySeed } from "./seed/category.seed";
import { organizationSeed } from "./seed/organization.seed";

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
        userSeed.seed()
        categorySeed.seed()
        organizationSeed.seed()
    }
)()