import { Request, Response, Application } from "express";
import { getPets, getPetById, createPet, editPet } from "./db";

export default (app: Application) => {
  app.get("/pets", (_req: Request, res: Response) => {
    getPets().then(pets => res.send(pets || []));
  });

  app.get("/pets/:id", (req: Request, res: Response) => {
    getPetById(req.params.id).then(pet => res.send(pet || {}));
  });

  app.post("/pets/create", (req: Request, res: Response) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    createPet({
      name: req.body.name
    }).then(({ success, _id }) => {
      if (success) {
        res.send({ method: "Success", _id });
      } else {
        res.send({ method: "Error", message: "Failed to create Pet" });
      }
    });
  });
};
