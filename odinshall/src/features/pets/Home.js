// @flow

//$FlowFixMe
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const getPets = async setPets => {
  const response = await fetch("http://localhost:3001/pets");
  const data = await response.json();
  setPets(data);
};

export default () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets(setPets);
  }, []);

  return (
    <div>
      <h2>Pets</h2>
      <List>
        {pets.map((pet, index) => (
          <ListItem key={index}>
            <Link key={"createButton"} to={`/pets/profile/${pet._id}`}>
              <ListItemText primary={`${pet.name}`} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Link key={"createButton"} to={`/pets/create`}>
        <Button color="primary">Create</Button>
      </Link>
    </div>
  );
};
