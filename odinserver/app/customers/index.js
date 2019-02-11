import {
  getCustomers,
  getCustomerById,
  createCustomer,
  editCustomer
} from "./db";

export default app => {
  app.get("/customers", (req, res) => {
    getCustomers().then(customers => res.send(customers || []));
  });

  app.get("/customers/:id", (req, res) => {
    getCustomerById(req.params.id).then(customer => res.send(customer || {}));
  });

  app.post("/customers/create", (req, res) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    createCustomer({
      firstName: req.body.firstName,
      surname: req.body.surname,
      phoneNumber: req.body.phoneNumber
    }).then(({ success, id }) => {
      if (success) {
        res.send({ method: "Success", id });
      } else {
        res.send({ method: "Error", message: "Failed to create Customer" });
      }
    });
  });

  app.post("/customers/edit/:id", (req, res) => {
    if (!req.body) {
      res.send({ method: "Error", message: "No Body provided in request." });
    }
    editCustomer({
      _id: req.params.id,
      firstName: req.body.firstName,
      surname: req.body.surname,
      phoneNumber: req.body.phoneNumber
    }).then(({ success, id }) => {
      if (success) {
        res.send({ method: "Success", id });
      } else {
        res.send({ method: "Error", message: "Failed to create Customer" });
      }
    });
  });
};
