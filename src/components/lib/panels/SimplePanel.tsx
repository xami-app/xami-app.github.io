import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from "../buttons/SimpleButton";
import Card from "../cards/SimpleCard";
import DropdownMenu, { SimpleDropdownMenuOption } from "../dropdown/SimpleDropdownMenu";

interface PanelProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    dropdownOptions?: SimpleDropdownMenuOption[];
    className?: string;
    backgroundClassName?: string;
    titleClassName?: string;
    collapsible?: boolean;
}

const Panel: React.FC<PanelProps> = ({
    title,
    icon,
    children,
    dropdownOptions,
    className = "",
    backgroundClassName,
    titleClassName = "",
    collapsible = true
}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Card className={`transition-all h-fit ${className}`} background={backgroundClassName}>
            <div className="flex justify-between items-center min-h-[40px]">
                <div className={`flex items-center ${titleClassName}`}>
                    {icon && <div className="text-gray-400">{icon}</div>}
                    <h2 className={`text-lg font-semibold pl-2`}>{title}</h2>
                </div>
                <div className="flex items-center gap-2">
                    {dropdownOptions && <DropdownMenu options={dropdownOptions} />}
                    {collapsible && (
                        <Button variant="ghost" onClick={() => setCollapsed(!collapsed)}>
                            <FaChevronDown className={`transition-transform ${collapsed ? "" : "rotate-180"}`} />
                        </Button>
                    )}
                </div>
            </div>

            {/* Apply overflow control without hardcoding max-height */}
            <div
                className={`mt-3 ${collapsed ? "hidden" : ""} flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400`}
            >
                {children}
            </div>
        </Card>
    );
};

export default Panel;
