import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb://127.0.0.1/OHOG",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("Connected to Mongo."))
  .catch(err => console.error("Error connecting to Mongo: ", err));
