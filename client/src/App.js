import React from "react";
import { Switch, Route } from "react-router-dom";

import { CompanyPortal, Homepage } from "./pages/";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/company_portal" component={CompanyPortal} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
