import express from "express";
import router from "./database/routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(router);

const port: string = process.env.SERVER_PORT || '8000';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});