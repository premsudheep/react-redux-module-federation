import { Link, Route, Routes } from "react-router-dom";
import "./Sidebar.module.css";
import React from "react";

function Sidebar() {
  return (
    <nav className="flex flex-col space-y-2 pl-10 pr-10 pt-5 pb-5 bg-pink-300">
      <input className="input" placeholder="Search..." />
      <div className="hover:bg-gray-200 hover:font-semibold">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="hover:bg-gray-200 hover:font-semibold">
        <Link to="/transaction">Transactions</Link>
      </div>
      <div className="hover:bg-gray-200 hover:font-semibold">
        <Link to="/statements">Statements</Link>
      </div>
      <div className="hover:bg-gray-200 hover:font-semibold">
        <Link to="/contactUs">Contact Us</Link>
      </div>
      <div className="hover:bg-gray-200 hover:font-semibold">
        <Link to="/signOut">Sign Out</Link>
      </div>
    </nav>
  );
}

export default Sidebar;
