import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const petSchema = new Schema({
  _id: ObjectId,
  owner: { type: Schema.Types.ObjectId, ref: "Customer" },
  name: String,
  breed: String
});

petSchema.index({ _id: 1, name: 1 });

export const Pet = mongoose.model("Pet", petSchema);
