// src/components/Sidebar/SidebarItem.tsx
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router";

interface SidebarItemProps {
    title: string;
    path: string;
    external?: boolean;
    depth?: number;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    path,
    external = false,
    depth = 0,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const paddingLeft = `${(depth + 1) * 0.75}rem`;
    const isActive = location.pathname === path;

    function handleOnClick() {
        if (!external) {
            navigate(path);
            return;
        }

        window.open(path, '_blank')?.focus();
    }

    return (
        <li
            onClick={handleOnClick}
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

                <span className={`text-sm truncate ${isActive ? 'text-indigo-300' : 'text-gray-300 group-hover:text-white'}`}>
                    {title}
                </span>
            </div>


            {external && (
                <button
                    className={`
                        p-1 rounded-md ml-auto cursor-pointer flex-shrink-0 z-10 mr-2 
                        transition-colors duration-300 group-hover:text-zinc-400 text-zinc-600 text-lg
                    `}
                    aria-label={"Visit"}
                >
                    <RiExternalLinkLine />
                </button>
            )}
        </li>
    );
};