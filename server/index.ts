import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import sequelize from './db';
const app = express();
const port: number = Number(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();