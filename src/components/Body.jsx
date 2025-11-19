import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Head } from "./Head";

export const Body = () => {
  const location = useLocation();

  // ✅ Only "/" should be fixed layout
  const isFixed = ["/"].includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      {/* Header always on top */}
      <Head />

      {/* Content area: Sidebar + Outlet */}
      <div
        className={`flex flex-1 ${
          isFixed ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
