import { Customer } from "./types";
import { Actions, StateType } from "./reducer";

export const createCustomer = async ({
  firstName,
  surname,
  phoneNumber
}: Customer) => {
  const response = await fetch("http://localhost:3001/customers/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      surname,
      phoneNumber
    })
  });
  return await response.json();
};

export const editCustomer = async ({
  _id,
  firstName,
  surname,
  phoneNumber
}: Customer) => {
  const response = await fetch(`http://localhost:3001/customers/edit/${_id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      surname,
      phoneNumber
    })
  });
  return await response.json();
};

export const getCustomerById = async (id: string, dispatch: Function) => {
  const response = await fetch(`http://localhost:3001/customers/${id}`);
  const data = await response.json();
  dispatch(Actions.setState(data));
};
