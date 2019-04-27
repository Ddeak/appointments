import React from "react";

import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type MainBarProps = {
  open: boolean;
  classes: any;
  handleDrawerOpen: () => void;
};

const MainBar = (props: MainBarProps) => {
  const { open, classes, handleDrawerOpen } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Odin's Hall of Grooming
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
