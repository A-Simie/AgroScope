import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "../ui/ThemeToggle";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Fixed sidebar on desktop */}
      <Sidebar />

      <div className="hidden md:block md:w-56 flex-shrink-0"></div>

      <main className="flex-1 p-6 pb-20 md:pb-0">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
