import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import Statements from "../pages/Statements";
import Transactions from "../pages/Transactions";

function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transaction" element={<Transactions />} />
      <Route path="/statements" element={<Statements />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/signOut" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;
