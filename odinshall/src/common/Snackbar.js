// @flow

import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import green from "@material-ui/core/colors/green";

const SharedSnackbarContext = React.createContext();

export const SnackBarTypes = {
  Success: "success",
  Error: "error",
  Info: "info"
};

const styles = theme => ({
  [SnackBarTypes.Success]: {
    backgroundColor: green[600]
  },
  [SnackBarTypes.Error]: {
    backgroundColor: theme.palette.error.dark
  },
  [SnackBarTypes.Info]: {
    backgroundColor: theme.palette.primary.dark
  }
});

type StateType = {
  isOpen: boolean,
  message: string,
  type: string
};

class SharedSnackbar extends Component<*, StateType> {
  state: StateType = {
    isOpen: false,
    message: "",
    type: ""
  };

  openSnackbar = (message: string, type: string) => {
    this.setState({
      message,
      type,
      isOpen: true
    });
  };

  closeSnackbar = () => {
    this.setState({
      message: "",
      type: "",
      isOpen: false
    });
  };

  render() {
    const { children, classes } = this.props;

    return (
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message
        }}
      >
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.isOpen}
          autoHideDuration={4000}
          onClose={this.closeSnackbar}
        >
          <SnackbarContent
            className={classes[this.state.type]}
            aria-describedby="client-snackbar"
            message={this.state.message}
          />
        </Snackbar>
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarProvider = withStyles(styles)(SharedSnackbar);

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
