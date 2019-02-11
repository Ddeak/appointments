import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: String,
  surname: String,
  phoneNumber: String
});

customerSchema.index({ _id: 1, firstName: 1, surname: 1 });

export const Customer = mongoose.model("Customer", customerSchema);
