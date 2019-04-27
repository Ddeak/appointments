import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const getCustomers = async (setCustomers: Function) => {
  const response = await fetch("http://localhost:3001/customers");
  const data = await response.json();
  setCustomers(data);
};

type Customer = {
  _id: string;
  firstName: string;
  surname: string;
  phoneNumber: string;
};

export default () => {
  const [customers, setCustomers] = useState<Array<Customer>>([]);

  useEffect(() => {
    getCustomers(setCustomers);
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <List>
        {customers.map((customer, index) => (
          <ListItem key={index}>
            <Link
              key={"createButton"}
              to={`/customers/profile/${customer._id}`}
            >
              <ListItemText
                primary={`${customer.firstName} ${customer.surname}: ${
                  customer.phoneNumber
                }`}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Link key={"createButton"} to={`/customers/create`}>
        <Button color="primary">Create</Button>
      </Link>
    </div>
  );
};
