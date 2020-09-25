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
      <Sidebar />
      <main></main>
    </div>
  );
}

export default App;
