import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./Pages/admin/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/admin' component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
