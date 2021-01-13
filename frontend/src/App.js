import React, {Component, Fragment} from "react";
import {BrowserRouter, Switch} from "react-router-dom";

import Login from "./modules/login/Login";
import Register from "./modules/register/Register";
import Homepage from "./modules/homepage/Homepage";
import Book from "./modules/book/Book";
import RouteFilter from "./components/router-filter/RouteFilter";


class App extends Component {
  render() {
    return (
      <Fragment>

        <BrowserRouter>
          <Switch>
            <RouteFilter path={"/"} exact={true} isProtected={true} component={Homepage}/>
            <RouteFilter path={"/login"} exact={true} isProtected={false} component={Login}/>
            <RouteFilter path={"/register"} exact={true} isProtected={false} component={Register}/>
            <RouteFilter path={"/book/:id"} exact={true} isProtected={true} component={Book}/>
          </Switch>
        </BrowserRouter>

      </Fragment>
    )
  }
}

export default App;
