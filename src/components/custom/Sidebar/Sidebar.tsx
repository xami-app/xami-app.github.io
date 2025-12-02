import React, { useEffect, useState } from "react";
import { BsChevronBarRight } from "react-icons/bs";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useNavigate } from "react-router";
import logo from "../../../assets/sidebar-icon.png";
import hierarchy from "../../../config/hierarchy.config";
import { getStorageValue, setStorageValue } from "../../../storage/StorageProvider";
import { ConfigEntry } from "../../../types/Config.types";
import { SidebarDivider } from "./SidebarDivider";
import { SidebarDropdown } from "./SidebarDropdown";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  handleSidebarLock: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSidebarLock }) => {
  const navigate = useNavigate();
  const getStorageLock = (): boolean => !!getStorageValue("sidebarLocked");
  const setStorageLock = (lock: boolean) => setStorageValue("sidebarLocked", lock);

  const [isLocked, setIsLocked] = useState(getStorageLock());
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isSidebarExpanded = isMobile || isLocked || isHovered;

  useEffect(() => {
    if (!isMobile && getStorageLock() !== isLocked) {
      setStorageLock(isLocked);
    }
    handleSidebarLock(isLocked);
  }, [isLocked, handleSidebarLock, isMobile]);

  const renderEntry = (entry: ConfigEntry, depth = 0): React.ReactNode => {
    const currentPath = entry.path || '';
    const hasPath = !!entry.path;
    const hasChildren = entry.children && entry.children.length > 0;

    if (hasChildren) {
      return (
        <SidebarDropdown
          key={entry.title + depth}
          title={entry.title}
          depth={depth}
          path={entry.path && currentPath}
        >
          {entry.children?.map((child) => renderEntry(child, depth + 1))}
        </SidebarDropdown>
      );
    }

    if (hasPath) {
      return (
        <SidebarItem
          key={entry.title + depth}
          title={entry.title}
          path={currentPath}
          depth={depth}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`
        z-50 fixed top-0 left-0 h-full transition-all duration-300
        shadow-sm bg-zinc-800 border-r border-zinc-700
        ${isSidebarExpanded ? "w-72" : "w-16"}
        flex flex-col
      `}
      onMouseEnter={() => !isMobile && !isLocked && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
        <img
          src={logo}
          className={`
            overflow-hidden transition-all duration-300 cursor-pointer
            ${isSidebarExpanded ? "w-10 opacity-100" : "w-0 opacity-0"}
            rounded-lg
          `}
          alt="Logo"
          onClick={() => navigate("/")}
        />
        {!isMobile && (
          <button
            onClick={() => setIsLocked((curr) => !curr)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-700"
            data-testid={"lock-sidebar"}
            aria-label={isLocked ? "Unlock Sidebar" : "Lock Sidebar"}
          >
            <BsChevronBarRight size={16} className={`transition-transform ${isLocked ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {isSidebarExpanded ? (
        <nav className="flex-grow mt-2 px-3 overflow-y-auto overflow-x-hidden pb-12">
          <ul className="space-y-0.5">
            <SidebarItem title={"Home"} path={"/"} />
            <SidebarItem title={"Roadmap"} path={"https://trello.com/b/54vZvM0g/roadmap"} external />
            <SidebarDivider expanded={isSidebarExpanded} text={"Docs"} />
            <SidebarItem title={"Getting started"} path={"/docs/getting-started"} />
            {hierarchy.map((docConfig) => renderEntry(docConfig))}
          </ul>
        </nav>
      ) : (
        <div className="flex-grow max-h-full h-full overflow-hidden text-gray-400 flex items-center justify-center mb-4">
          <div className="relative w-full h-full flex items-center justify-center border border-dashed border-gray-500 rounded-lg mx-2">
            <MdOutlineMenuOpen className="text-gray-400" size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;