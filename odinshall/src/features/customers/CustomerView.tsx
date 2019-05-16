import React from "react";

// Material
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { Link } from "react-router-dom";

import CustomInput from "../../common/Input";
import { Actions } from "./reducer";

const styles = (theme: Theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

type PropType = {
  classes: any;
  firstName: string;
  surname: string;
  phoneNumber: string;
  loading: boolean;
  isCreate: boolean;
  onSubmit: Function;
  dispatch: Function;
};

const CustomerView = (props: PropType) => {
  const {
    firstName,
    surname,
    phoneNumber,
    loading,
    dispatch,
    onSubmit,
    classes,
    isCreate
  } = props;

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <CustomInput
          label={"First Name"}
          value={firstName}
          onChange={event => dispatch(Actions.setFirstName(event.target.value))}
        />
        <CustomInput
          label={"Surname"}
          value={surname}
          onChange={event => dispatch(Actions.setSurname(event.target.value))}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomInput
          label={"Phone Number"}
          value={phoneNumber}
          onChange={event =>
            dispatch(Actions.setPhoneNumber(event.target.value))
          }
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
          onClick={() => onSubmit()}
        >
          {isCreate ? "Create" : "Edit"}
          <AddIcon className={classes.rightIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CustomerView);
