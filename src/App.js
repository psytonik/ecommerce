import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Header from "./components/NavMenu/Header";

const App = () => {
  return (
      <Fragment>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sign-in" component={SignIn}  />
              <Route exact path="/sign-up" component={SignUp} />
          </Switch>
      </Fragment>
  );
}

export default App;
