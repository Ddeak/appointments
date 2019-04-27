import React, { useState, useEffect } from "react";

// Material
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { Link } from "react-router-dom";

const getCustomerById = async (
  id: string,
  firstName: (value: string) => void,
  surname: (value: string) => void,
  phoneNumber: (value: string) => void
) => {
  const response = await fetch(`http://localhost:3001/customers/${id}`);
  const data = await response.json();
  firstName(data.firstName);
  surname(data.surname);
  phoneNumber(data.phoneNumber);
};

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

type PropType = {
  classes: any;
  history: { goBack: Function };
  match: { params: { id: string } };
};

const CreateCustomer = (props: PropType) => {
  const { classes } = props;
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const id = props.match.params.id;

  const onEdit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/customers/edit/${id}`,
        {
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
        }
      );
      const data = await response.json();
      if (data.method === "Success") props.history.goBack();
      setLoading(false);
    } catch (err) {
      console.log("Something went wrong creating a customer: ");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomerById(id, setFirstName, setSurname, setPhoneNumber);
  }, []);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.textField}
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          margin="normal"
        />
        <TextField
          id="surname"
          label="Surname"
          className={classes.textField}
          value={surname}
          onChange={event => setSurname(event.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="phoneNumber"
          label="Phone Number"
          className={classes.textField}
          value={phoneNumber}
          onChange={event => setPhoneNumber(event.target.value)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Link key={"createButton"} to={`/customers`}>
          <Button>Back</Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={loading}
          onClick={() => onEdit()}
        >
          Edit
          <AddIcon className={classes.rightIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CreateCustomer);
