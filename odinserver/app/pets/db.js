import { Pet } from "./schema";

export const editPet = async editData => {
  const editedPet = await Pet.findOneAndUpdate(
    { _id: editData._id },
    editData,
    { upsert: false }
  );
  return { success: true, _id: editedPet._id };
};

export const createPet = async pet => {
  const savedPet = await Pet.create(pet);
  return { success: true, _id: savedPet._id };
};

export const getPets = async () => {
  return await Pet.find({});
};

export const getPetById = async id => {
  return await Pet.findById(id);
};
