import { getPets, getPetById, createPet, editPet } from "./db";

export default app => {
  app.get("/pets", (req, res) => {
    getPets().then(pets => res.send(pets || []));
  });

  app.get("/pets/:id", (req, res) => {
    getPetById(req.params.id).then(pet => res.send(pet || {}));
  });
};
