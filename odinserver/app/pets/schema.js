import mongoose from "mongoose";
const Schema = mongoose.Schema;

const petSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Customer" },
  name: String,
  breed: String
});

petSchema.index({ _id: 1, name: 1 });

export const Pet = mongoose.model("Pet", petSchema);
