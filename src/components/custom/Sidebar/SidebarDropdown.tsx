import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { hasActiveChild } from "../../../utils/Document.utils";

interface SidebarDropdownProps {
    title: string;
    depth: number;
    path?: string;
    children: React.ReactNode;
}

export const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
    title,
    depth,
    path,
    children,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === path;
    const childIsActive = hasActiveChild(children, location.pathname);
    const [isOpen, setIsOpen] = useState(isActive || childIsActive);


    useEffect(() => {
        if (!isOpen) {
            setIsOpen(isActive || childIsActive);
        }
    }, [isActive, childIsActive]);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    const navigable = path != null;

    const handleNavigateOrToggle = (e: React.MouseEvent) => {
        if (path) {
            e.stopPropagation();
            navigate(path);
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
                    ${isActive
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

                    <span
                        className={`
                                text-sm truncate
                                ${isActive && navigable ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                                ${navigable ? ' underline-offset-2 cursor-pointer' : ''}
                            `}
                        onClick={navigable && path ? (e) => { e.stopPropagation(); navigate(path); } : undefined}
                    >
                        {title}
                    </span>
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