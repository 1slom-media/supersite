import express from "express";
import { PORT } from "./config.js";
import cors from 'cors';
import modules from "./modules/index.js";

const app = express();
app.use(express.json());
app.use(cors())
app.use(modules);

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`));