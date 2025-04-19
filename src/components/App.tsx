import { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router";
import { getStorageValue } from "../storage/StorageProvider";
import Sidebar from "./custom/Sidebar/Sidebar";
import Navbar from "./custom/Navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/lib/NotFoundPage";
import DocViewPage from "./pages/docs/DocViewPage";

export default function App() {
  const [sidebarLocked, setSidebarLocked] = useState<boolean>(getStorageValue("sidebarLocked") as boolean);

  return (
    <Router>
        <div className="flex min-h-screen max-w-screen bg-zinc-900 text-white">
          <Sidebar handleSidebarLock={setSidebarLocked} />
          <div className={`flex flex-col w-full transition-all duration-300 ${sidebarLocked ? "ml-72" : "ml-16"}`}>
            <Navbar className={`mb-2 transition-all duration-300 ${sidebarLocked ? "ml-72" : "ml-16"}`} />
            <div className="flex-1 overflow-auto mt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
              
                <Route path="/docs/*" element={<DocViewPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
    </Router>
  );
}
