const express = require("express");
const app = express();
const port = 3000;

import tempApps from "./appointments";

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/appointments", (req, res) => res.send(tempApps));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
