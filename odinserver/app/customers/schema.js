import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const customerSchema = new Schema({
  _id: ObjectId,
  firstName: String,
  surname: String,
  phoneNumber: String
});

customerSchema.index({ _id: 1, firstName: 1, surname: 1 });

export const Customer = mongoose.model("Customer", customerSchema);
