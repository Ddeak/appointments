import { Customer } from "./schema";

export const editCustomer = async editData => {
  const editedCustomer = await Customer.findOneAndUpdate(
    { _id: editData._id },
    editData,
    { upsert: false }
  );
  return { success: true, _id: editedCustomer._id };
};

export const createCustomer = async customer => {
  const savedCustomer = await Customer.create(customer);
  return { success: true, _id: savedCustomer._id };
};

export const getCustomers = async () => {
  return await Customer.find({});
};

export const getCustomerById = async id => {
  return await Customer.findById(id);
};
