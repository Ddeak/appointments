import React, { useReducer } from "react";

// Material
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { Link } from "react-router-dom";

import { reducer, Actions, initialReducerState } from "./reducer";
import { createCustomer } from "./api";

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

const CreateCustomer = (props: PropType) => {
  const { classes } = props;
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const { firstName, surname, phoneNumber, loading } = state;

  const onCreate = async () => {
    dispatch(Actions.setLoading(true));
    try {
      const data = await createCustomer(firstName, surname, phoneNumber);
      if (data.method === "Success") props.history.goBack();
      dispatch(Actions.setLoading(false));
    } catch (err) {
      console.log("Something went wrong creating a customer: ");
      dispatch(Actions.setLoading(false));
    }
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.textField}
          value={firstName}
          onChange={event => dispatch(Actions.setFirstName(event.target.value))}
          margin="normal"
        />
        <TextField
          id="surname"
          label="Surname"
          className={classes.textField}
          value={surname}
          onChange={event => dispatch(Actions.setSurname(event.target.value))}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="phoneNumber"
          label="Phone Number"
          className={classes.textField}
          value={phoneNumber}
          onChange={event =>
            dispatch(Actions.setPhoneNumber(event.target.value))
          }
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
