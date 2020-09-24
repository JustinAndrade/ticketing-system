import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import { CompanyPortal, UserPortal, Homepage } from "./pages/";

import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [company_id, setCompanyId] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/company_portal" component={CompanyPortal} />
          <Route
            exact
            path="/company/user_portal"
            component={isAuthenticated ? UserPortal : CompanyPortal}
          />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
