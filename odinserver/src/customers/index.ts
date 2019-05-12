import {
  getCustomers,
  getCustomerById,
  createCustomer,
  editCustomer
} from "./db";

import { Request, Response, Application } from "express";

import { CustomerType } from "./schema";

export default (app: Application) => {
  app.get("/customers", (_req: Request, res: Response) => {
    getCustomers().then(customers => res.send(customers || []));
  });

  app.get("/customers/:id", (req: Request, res: Response) => {
    getCustomerById(req.params.id).then(customer => res.send(customer || {}));
  });

  app.post("/customers/create", (req: Request, res: Response) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    const newCustomer: CustomerType = {
      firstName: req.body.firstName,
      surname: req.body.surname,
      phoneNumber: req.body.phoneNumber
    };
    createCustomer(newCustomer).then(({ success, _id }) => {
      if (success) {
        res.send({ method: "Success", _id });
      } else {
        res.send({ method: "Error", message: "Failed to create Customer" });
      }
    });
  });

  app.post("/customers/edit/:id", (req: Request, res: Response) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    editCustomer({
      _id: req.params.id,
      firstName: req.body.firstName,
      surname: req.body.surname,
      phoneNumber: req.body.phoneNumber
    }).then(({ success, _id }) => {
      if (success) {
        res.send({ method: "Success", _id });
      } else {
        res.send({ method: "Error", message: "Failed to create Customer" });
      }
    });
  });
};
