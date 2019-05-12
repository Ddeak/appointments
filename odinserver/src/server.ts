import "./connect";

import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import tempApps from "./appointments";
import setupCustomers from "./customers";
import setupPets from "./pets";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (_req: Request, res: Response) => res.send("Hello World!"));
app.get("/appointments", (_req: Request, res: Response) => res.send(tempApps));

setupCustomers(app);
setupPets(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
