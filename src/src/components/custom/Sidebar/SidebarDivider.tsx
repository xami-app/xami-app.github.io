import React, { ReactNode } from "react";

interface SidebarDividerProps {
    text?: string | ReactNode;
    expanded: boolean;
}

export const SidebarDivider: React.FC<SidebarDividerProps> = ({
    text,
    expanded,
}) => {
    return (
        <div className="flex items-center justify-center my-4 transition-all duration-300">
            <div className="border-t border-gray-600 w-1/2"></div>
            {text && expanded && <span className="mx-4 text-sm text-gray-400 text-center select-none">{text}</span>}
            <div className="border-t border-gray-600 w-1/2"></div>
        </div>
    );
};