import React from "react";
import { withStyles } from "@material-ui/core/styles";

import MainBar from "./MainBar";
import Drawer from "./Drawer";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerz: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

type StateType = { open: boolean };
type PropsType = { classes: any; theme: any; content: any };

class Nav extends React.Component<PropsType, StateType> {
  state: StateType = { open: false };

  handleDrawerOpen = () => this.setState({ open: true });

  handleDrawerClose = () => this.setState({ open: false });

  render() {
    const { classes, theme, content } = this.props;

    return (
      <div className={classes.root}>
        <MainBar
          open={this.state.open}
          classes={classes}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          open={this.state.open}
          handleDrawerClose={this.handleDrawerClose}
          classes={classes}
          theme={theme}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {content}
        </main>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(Nav);
