import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./Pages/admin/AdminPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
