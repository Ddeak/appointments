import { Customer, CustomerType } from "./schema";

export const editCustomer = async (editData: CustomerType) => {
  const editedCustomer = await Customer.findOneAndUpdate(
    { _id: editData._id },
    editData,
    { upsert: false }
  );
  return { success: true, _id: editedCustomer._id };
};

export const createCustomer = async (customer: CustomerType) => {
  const savedCustomer = await Customer.create(customer);
  return { success: true, _id: savedCustomer._id };
};

export const getCustomers = async () => {
  return await Customer.find({});
};

export const getCustomerById = async (id: number) => {
  return await Customer.findById(id);
};
