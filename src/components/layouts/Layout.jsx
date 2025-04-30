// components/layout/Layout.jsx
import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
