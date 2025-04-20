// src/components/Sidebar/SidebarItem.tsx
import React from "react";

interface SidebarItemProps {
    title: string;
    active: boolean;
    onClick: () => void;
    expanded: boolean;
    depth?: number;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    active,
    onClick,
    expanded,
    depth = 0,
}) => {
    const paddingLeft = `${(depth + 1) * 0.75}rem`;

    return (
        <li
            onClick={onClick}
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
                    <span className={`text-sm truncate ${active ? 'text-indigo-300' : 'text-gray-300 group-hover:text-white'}`}>
                        {title}
                    </span>
                )}
            </div>
        </li>
    );
};