import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoPage from "./TodoPage";
import Home from "./Home";
import Values from "./Values";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  container: {
    style: "flex",
    paddingTop: "85px",
    paddingLeft: "20px",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Drawer />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/values" render={(props) => <Values {...props} />} />
        <Route
          exact
          path="/tasks"
          render={(props) => <TodoPage {...props} />}
        />
      </Switch>
    </div>
  );
}
