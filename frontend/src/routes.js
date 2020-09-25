import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Dashabord from "./pages/Dashabord";
import Profile from "./pages/Profile";
import Teachers from "./pages/Teachers";
import Materials from "./pages/Materials";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashabord} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/materials" component={Materials} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
