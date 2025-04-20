// src/components/Sidebar/Sidebar.tsx
import React, { useEffect, useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";
import logo from "../../../assets/sidebar-icon.png";
import { getStorageValue, setStorageValue } from "../../../storage/StorageProvider";
import { SidebarItem } from "./SidebarItem";
import { ConfigEntry } from "../../../types/Config.types";
import userDocConfig from "../../../config/user.docs.config";
import { SidebarDropdown } from "./SidebarDropdown";
import adminDocConfig from "../../../config/Admin.docs.config";
import devDocConfig from "../../../config/Developer.docs.config";

interface SidebarProps {
    handleSidebarLock: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSidebarLock }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const getStorageLock = (): boolean => !!getStorageValue("sidebarLocked");
    const setStorageLock = (lock: boolean) => setStorageValue("sidebarLocked", lock);

    const [isLocked, setIsLocked] = useState(getStorageLock());
    const [isHovered, setIsHovered] = useState(false);
    const isSidebarExpanded = isLocked || isHovered;

    useEffect(() => {
        if (getStorageLock() !== isLocked) {
            setStorageLock(isLocked);
        }
        handleSidebarLock(isLocked);
    }, [isLocked, handleSidebarLock]);

    const renderEntry = (basePath: string, entry: ConfigEntry, depth = 0): React.ReactNode => {
        const currentPath = basePath + (entry.path || '');
        const hasPath = !!entry.path;
        const hasChildren = entry.children && entry.children.length > 0;
        const isActive = hasPath && location.pathname === currentPath;

        if (hasChildren) {
            return (
                <SidebarDropdown
                    key={entry.title + depth}
                    title={entry.title}
                    depth={depth}
                    navigable={hasPath}
                    onNavigate={hasPath ? () => navigate(currentPath) : undefined}
                    expanded={isSidebarExpanded}
                    active={isActive}
                >
                    {entry.children?.map((child) =>
                        renderEntry(basePath, child, depth + 1)
                    )}
                </SidebarDropdown>
            );
        }

        if (hasPath) {
            return (
                <SidebarItem
                    key={entry.title + depth}
                    title={entry.title}
                    active={isActive}
                    onClick={() => navigate(currentPath)}
                    expanded={isSidebarExpanded}
                    depth={depth}
                />
            );
        }
        return null;
    };

    return (
        <div
            className={`
                z-40 fixed top-0 left-0 h-full transition-all duration-300
                shadow-sm bg-zinc-800 border-r border-zinc-700
                ${isSidebarExpanded ? "w-72" : "w-16"}
                flex flex-col
            `}
            onMouseEnter={() => !isLocked && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
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
                <button
                    onClick={() => setIsLocked((curr) => !curr)}
                    className={`p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-700`}
                    data-testid={"lock-sidebar"}
                    aria-label={isLocked ? "Unlock Sidebar" : "Lock Sidebar"}
                >
                    {isLocked ? <BsChevronBarLeft size={16} /> : <BsChevronBarRight size={16} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-grow mt-2 px-3 overflow-y-auto overflow-x-hidden pb-12">
                <ul className="space-y-0.5">
                    <SidebarItem
                        title={"Home"}
                        active={location.pathname == "/"}
                        onClick={() => navigate("/")}
                        expanded={isSidebarExpanded}
                    />
                    <SidebarItem
                        title={"Getting started"}
                        active={location.pathname == "/docs/getting-started"}
                        onClick={() => navigate("/docs/getting-started")}
                        expanded={isSidebarExpanded}
                    />  
                    <SidebarDropdown
                        key={"User"}
                        title={"User"}
                        depth={0}
                        navigable={true}
                        onNavigate={() => navigate("/docs/user/getting-started")}
                        expanded={isSidebarExpanded}
                        active={location.pathname == "/docs/user/getting-started"}
                    >
                        {userDocConfig.entries.map((entry) =>
                            renderEntry(userDocConfig.basePath, entry, 1)
                        )}
                    </SidebarDropdown>
                    <SidebarDropdown
                        key={"Admin"}
                        title={"Admin"}
                        depth={0}
                        navigable={true}
                        onNavigate={() => navigate("/docs/admin/getting-started")}
                        expanded={isSidebarExpanded}
                        active={location.pathname == "/docs/admin/getting-started"}
                    >
                        {adminDocConfig.entries.map((entry) =>
                            renderEntry(adminDocConfig.basePath, entry, 1)
                        )}
                    </SidebarDropdown>
                    <SidebarDropdown
                        key={"Developer"}
                        title={"Developer"}
                        depth={0}
                        navigable={true}
                        onNavigate={() => navigate("/docs/dev/getting-started")}
                        expanded={isSidebarExpanded}
                        active={location.pathname == "/docs/dev/getting-started"}
                    >
                        {devDocConfig.entries.map((entry) =>
                            renderEntry(devDocConfig.basePath, entry, 1)
                        )}
                    </SidebarDropdown>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;