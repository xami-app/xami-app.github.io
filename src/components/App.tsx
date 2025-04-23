import { useEffect, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router";
import { getStorageValue } from "../storage/StorageProvider";
import Sidebar from "./custom/Sidebar/Sidebar";
import Navbar from "./custom/Navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/lib/NotFoundPage";
import DocViewPage from "./pages/docs/DocViewPage";
import { MdOutlineMenuOpen } from "react-icons/md";

export default function App() {
  const [sidebarLocked, setSidebarLocked] = useState<boolean>(getStorageValue("sidebarLocked") as boolean);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileSidebarOpen) {
        setMobileSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileSidebarOpen]);

  return (
    <Router>
      <div className="flex min-h-screen max-w-screen bg-zinc-900 text-white relative">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="md:hidden fixed top-20 z-50 p-3 rounded-r-2xl bg-zinc-800 text-gray-300"
        >
          <MdOutlineMenuOpen size={24} />
        </button>

        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar handleSidebarLock={setSidebarLocked} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex">
            <Sidebar handleSidebarLock={() => {}} />
            <div
              className="flex-1"
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>
        )}

        {/* Main Content */}
        <div className={`flex flex-col w-full transition-all duration-300 ${sidebarLocked ? "md:ml-72" : "md:ml-16"}`}>
          <Navbar className={`mb-2 transition-all duration-300 ${sidebarLocked ? "md:ml-72" : "md:ml-16"}`} />
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
