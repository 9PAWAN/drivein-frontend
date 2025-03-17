import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CounterProfile from "./CounterProfile";
import { NavLink, Routes, Route, Router, Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Counter";
import Settings from "./Settings";
import CounterActivity from "./CounterActivity";

function Admin() {
  // State to store the active card name
  const [activeTab, setActiveTab] = useState("counterprofile");

  const data = [
    { name: "counterprofile", label: "Counter Profile" },
    { name: "counteractivity", label: "Counter Activity" },
    { name: "counter", label: "Counter" },
    { name: "settings", label: "Settings" },
  ];

  return (
    <div>
      <Header/>
      <div className="admin d-flex">
        {/* Left Sidebar */}
        <div className="adminsidenav p-3">
          {data.map((element) => (
            <NavLink
              key={element.name}
              to={`/admin/${element.name}`}
              className={({ isActive }) =>
                `btn px-5 my-3 w-100 ${
                  isActive ? "btn-primary" : "btn-warning"
                }`
              }
              onClick={() => setActiveTab(element.name)} // Update active state on click
            >
              {element.label}
            </NavLink>
          ))}
        </div>

        {/* Right Panel */}
        <div className="adminmain p-4">
          {/* <h4>Active Tab:{{activeTab}}</h4> Display Active Tab Name */}
            <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Admin;
