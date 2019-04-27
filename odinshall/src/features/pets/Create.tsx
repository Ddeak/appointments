import React, { useState } from "react";

// Material
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { Link } from "react-router-dom";

const styles = (theme: Theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

type PropType = { classes: any; history: { goBack: Function } };

const fetchPets = async (body: any) => {
  const response = await fetch("http://localhost:3001/pets/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await response.json();
};

const CreateCustomer = (props: PropType) => {
  const { classes } = props;
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const onCreate = async () => {
    setLoading(true);
    try {
      const data = await fetchPets({ name });
      if (data.method === "Success") props.history.goBack();
      setLoading(false);
    } catch (err) {
      console.log("Something went wrong creating a pet: ");
      setLoading(false);
    }
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.textField}
          value={name}
          onChange={event => setName(event.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Link key={"createButton"} to={`/pets`}>
          <Button>Back</Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={loading}
          onClick={() => onCreate()}
        >
          Create
          <AddIcon className={classes.rightIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CreateCustomer);
