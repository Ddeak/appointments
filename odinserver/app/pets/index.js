import { getPets, getPetById, createPet, editPet } from "./db";

export default app => {
  app.get("/pets", (req, res) => {
    getPets().then(pets => res.send(pets || []));
  });

  app.get("/pets/:id", (req, res) => {
    getPetById(req.params.id).then(pet => res.send(pet || {}));
  });

  app.post("/pets/create", (req, res) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    createPet({
      name: req.body.name
    }).then(({ success, id }) => {
      if (success) {
        res.send({ method: "Success", id });
      } else {
        res.send({ method: "Error", message: "Failed to create Pet" });
      }
    });
  });
};
