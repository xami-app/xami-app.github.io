// src/components/Sidebar/SidebarItem.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router";

interface SidebarItemProps {
    title: string;
    path: string;
    expanded: boolean;
    depth?: number;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    path,
    expanded,
    depth = 0,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const paddingLeft = `${(depth + 1) * 0.75}rem`;
    const isActive = location.pathname === path;

    return (
        <li
            onClick={() => navigate(path)}
            className={`
                flex items-center justify-between my-0.5 py-1 rounded-md cursor-pointer transition-colors
                group relative 
                hover:bg-zinc-700/50 
            `}
            style={{ paddingLeft }}
        >
            <div
                className={`
                    flex-grow flex items-center overflow-hidden mr-1 transition-colors duration-150 ease-in-out
                `}
            >
                {expanded && (
                    <span className={`text-sm truncate ${isActive ? 'text-indigo-300' : 'text-gray-300 group-hover:text-white'}`}>
                        {title}
                    </span>
                )}
            </div>
        </li>
    );
};