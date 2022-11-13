import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from "express";
import { routes } from "./routes";
import cors from "cors";
import { Validations } from "src/2-controller/validations/index";

const validations = new Validations();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: any, __: Request, res: Response, _: any) => {
  validations.formatValidate(error, res);
});

app.listen(process.env.SERVER_PORT || 3333, () =>
  console.log("Server started...")
);
