import React, {ReactNode, useState} from "react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
 
interface SidebarDropdownGroupProps {
    sidebarExpanded: boolean;
    icon: React.ReactNode;
    title: string;
    children: ReactNode;
    initialExpandedState?: boolean;
}
 
export const SidebarDropdownGroup: React.FC<SidebarDropdownGroupProps> = ({
                                                                              children,
                                                                              sidebarExpanded,
                                                                              icon,
                                                                              title,
                                                                              initialExpandedState = false,
                                                                          }) => {
    const [dropdownState, setDropdownState] = useState<boolean>(initialExpandedState);
 
    return (
        <div className={"border-b border-gray-400"}>
            <div onClick={() => sidebarExpanded ? setDropdownState(!dropdownState) : null}>
                <li className={
                        "select-none relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer rounded-md transition-colors group hover:bg-indigo-50 text-gray-600 dark:text-gray-400 dark:hover:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-b-none"
                }>
                    {icon}
                    <div className={`
                            select-none overflow-hidden transition-all 
                            ${sidebarExpanded ? "w-full ml-3" : "w-0"}
                    `}>
                        <div className={"flex flex-row justify-between items-baseline"}>
                            <span className={`whitespace-nowrap overflow-hidden`}>{title}</span>
                            {dropdownState ? (
                                <BiChevronUp className={"text-xl"}/>
                            ) : (
                                <BiChevronDown className={"text-xl"}/>
                            )}
                        </div>
                    </div>
                </li>
            </div>
            <div className={"mt-[-4px] ml-6"}>
                {dropdownState &&
                    sidebarExpanded &&
                    children}
            </div>
        </div>
    );
};