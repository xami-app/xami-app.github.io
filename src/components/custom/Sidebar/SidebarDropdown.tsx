import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
 
interface SidebarDropdownProps {
    sidebarExpanded: boolean;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    hideBorder?: boolean;
    initialExpandedState?: boolean;
    forwardTestID?: string;
}
 
export const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
                                                                    sidebarExpanded,
                                                                    icon,
                                                                    title,
                                                                    children,
                                                                    hideBorder = false,
                                                                    initialExpandedState = false,
                                                                    forwardTestID
                                                                }) => {
    const [dropdownState, setDropdownState] = useState<boolean>(initialExpandedState);
 
    useEffect(() => {
        if(!dropdownState) setDropdownState(initialExpandedState)
    }, [dropdownState, initialExpandedState]);
 
    return (
        <div>
            <div
                onClick={() => (sidebarExpanded ? setDropdownState(!dropdownState) : null)}
                data-testid={forwardTestID}
            >
                <li
                    className={
                        "select-none relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer rounded-md transition-colors group text-gray-600 dark:text-gray-400 bg-zinc-800 hover:bg-zinc-700 rounded-b-none"
                    }
                >
                    {icon}
                    <div
                        className={`select-none overflow-hidden transition-all ${
                            sidebarExpanded ? "w-full ml-3" : "w-0"
                        }`}
                    >
                        <div className={"flex flex-row justify-between items-baseline"}>
                            <span>{sidebarExpanded && title}</span>
                            {dropdownState ? (
                                <BiChevronUp className={"text-xl"}/>
                            ) : (
                                <BiChevronDown className={"text-xl"}/>
                            )}
                        </div>
                    </div>
                </li>
            </div>
            <div className={`${!hideBorder && "border-b"} border-gray-400`}>
                <div className={`ml-4`}>
                    {dropdownState &&
                        sidebarExpanded &&
                        children}
                </div>
            </div>
        </div>
    );
};