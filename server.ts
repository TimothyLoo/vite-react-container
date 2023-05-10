import express from "express";
import router from "./database/routes.js";

const app = express();

app.use(router);

const port: number = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});