import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type PetType = {
  _id: string;
  owner: string;
  name: string;
  breed: string;
};

const petSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Customer" },
  name: String,
  breed: String
});

petSchema.index({ _id: 1, name: 1 });

export const Pet = mongoose.model("Pet", petSchema);
