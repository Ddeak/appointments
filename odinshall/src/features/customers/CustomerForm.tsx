import React, { useReducer, useEffect } from "react";

import { reducer, Actions, initialReducerState } from "./reducer";

import CustomerView from "./CustomerView";
import { createCustomer, editCustomer, getCustomerById } from "./api";

type PropType = {
  history: { goBack: Function };
  match: { params: { id: string } };
};

const CustomerForm = (props: PropType) => {
  const _id = props.match.params.id;
  const isCreate = _id ? false : true;

  const [state, dispatch] = useReducer(reducer, initialReducerState);
  const { firstName, surname, phoneNumber, loading } = state;

  const onSubmit = async () => {
    dispatch(Actions.setLoading(true));
    try {
      const data = isCreate
        ? await createCustomer({ firstName, surname, phoneNumber })
        : await editCustomer({ _id, firstName, surname, phoneNumber });
      if (data.method === "Success") props.history.goBack();
      dispatch(Actions.setLoading(false));
    } catch (err) {
      console.log("Something went wrong creating a customer: ");
      dispatch(Actions.setLoading(false));
    }
  };

  useEffect(() => {
    if (!isCreate) getCustomerById(_id, dispatch);
  }, []);

  return (
    <CustomerView
      {...state}
      onSubmit={onSubmit}
      dispatch={dispatch}
      isCreate={isCreate}
    />
  );
};

export default CustomerForm;
