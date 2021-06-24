import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AddUser from "./components/users/AddUser";
import User from "./components/users/User";
import EditUser from "./components/users/EditUser";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/show/:id" component={User} />
          <Route exact path="/users/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    );
  }
}
