import mongoose from 'mongoose'; 

interface IConfiguration {
    mongoUrl: string;
    dbName: string;
}

export class DB {

    private mongoUri: string;
    private DbName: string;


    constructor({ mongoUrl, dbName }: IConfiguration) {
        this.mongoUri = mongoUrl;
        this.DbName = dbName;
    };

     async connect() {
        try {
            await mongoose.connect(this.mongoUri, {
                dbName: this.DbName
            });
            console.log('Database connected');
        } catch (error) {
            console.error('Database connection failed');
        }
    };

};