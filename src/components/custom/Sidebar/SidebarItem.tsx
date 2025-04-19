import { useNavigate } from "react-router";
import React from "react";

interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
    active?: boolean;
    alert?: boolean;
    onClick: (() => void) | string;
    expanded: boolean;
    isStandalone?: boolean;
    hideBorder?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    title,
    active = false,
    alert = false,
    onClick,
    expanded,
    isStandalone = true,
    hideBorder = true
}) => {
    const navigate = useNavigate();

    return (
        <div onClick={typeof onClick == "string" ? () => navigate(onClick) : onClick}>
            <li
                className={`
                    transition-colors duration-300 relative flex items-center py-2 px-3 my-1
                    font-medium rounded-md cursor-pointer group
                    ${isStandalone
                        ? !hideBorder && `border-b rounded-b-none border-gray-400`
                        : `select-none ml-4 border-l rounded-l-none font-medium cursor-pointer bg-white 
                            px-3 py-2 items-center rounded-lg group dark:bg-zinc-800 
                            border-gray-400 hover:border-white`}
                    ${active
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-gray-900 hover:text-black"
                        : "hover:bg-zinc-700 text-gray-400"}
                `}
            >
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
                    {expanded && title}
                </span>
                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                            expanded ? "" : "top-2"
                        }`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`
                            absolute left-full rounded-md px-2 py-1 ml-6
                            bg-indigo-100 text-indigo-800 text-sm
                            invisible opacity-20 -translate-x-3 transition-opacity duration-300 ease-in-out
                            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                        `}
                    >
                        {title}
                    </div>
                )}
            </li>
        </div>
    );
};