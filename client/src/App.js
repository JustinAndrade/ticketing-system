import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import { CompanyPortal, UserPortal, Homepage } from "./pages/";

import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [company_id, setCompanyId] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <main>
        <Route exact path="/" component={Homepage} />
        {/* Need to make Dynamic for multiple companies, based off company id */}
        <Route exact path="/company_portal" component={CompanyPortal} />
        <Route path="/company/" component={Sidebar} />
        {/* <Sidebar /> */}
      </main>
    </div>
  );
}

export default App;
