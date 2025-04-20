// src/components/Sidebar/SidebarDropdown.tsx
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface SidebarDropdownProps {
    title: string;
    depth: number;
    navigable?: boolean;
    onNavigate?: () => void;
    children: React.ReactNode;
    expanded: boolean;
    active: boolean;
}

export const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
    title,
    depth,
    navigable,
    onNavigate,
    children,
    expanded,
    active,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    const handleNavigateOrToggle = (e: React.MouseEvent) => {
        if (navigable && onNavigate) {
            e.stopPropagation();
            onNavigate();
        } else if (children) {
             setIsOpen((prev) => !prev);
        }
    };

     const handleLiClick = (e: React.MouseEvent) => {
         if ((e.target as Element).closest('button')) {
             return;
         }
         handleNavigateOrToggle(e);
     };


    const paddingLeft = `${(depth + 1) * 0.75}rem`;

    return (
        <>
            <li
                className={`
                    flex items-center justify-between my-0.5 py-0.5 rounded-md cursor-pointer transition-colors
                    group relative
                    hover:bg-zinc-700/50
                    ${active
                        ? 'bg-zinc-700 text-white rounded px-2 py-0.5'
                        : 'text-gray-300 px-2 py-0.5'
                    }
                    ${navigable && "hover:underline"}
                `}
                style={{ paddingLeft }}
                onClick={handleLiClick}
            >
                <div
                    className={`
                        flex-grow flex items-center overflow-hidden mr-1 transition-all duration-150 ease-in-out
                    `}
                >
                    {expanded && (
                        <span
                            className={`
                                text-sm truncate
                                ${active && navigable ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                                ${navigable ? ' underline-offset-2 cursor-pointer' : ''}
                            `}
                            onClick={navigable && onNavigate ? (e) => { e.stopPropagation(); onNavigate(); } : undefined}
                        >
                            {title}
                        </span>
                    )}
                </div>

                {/* Arrow Button */}
                {children && (
                    <button
                        onClick={handleToggle}
                        className="p-1 rounded-md hover:bg-zinc-600 ml-auto flex-shrink-0 z-10"
                        aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                        <MdOutlineKeyboardArrowRight className={`text-lg text-zinc-400 group-hover:text-white transition-transform ${isOpen ? "rotate-90" : ""}`} />
                    </button>
                )}
            </li>

            {/* Children */}
            {isOpen && (
                <ul className="mt-1 space-y-0.5">
                    {children}
                </ul>
            )}
        </>
    );
};