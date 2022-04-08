import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./sidebar";
import "./Layout.module.css";
import AppRouter from "./AppRouter";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className="main">
        <div className="flex flex-row">
          <div>
            <Sidebar />
          </div>
          <div className="w-full h-auto">
            <AppRouter />
            <div>{props.children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
