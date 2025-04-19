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
    titleClassName?: string;
}

const Panel: React.FC<PanelProps> = ({ title, icon, children, dropdownOptions, className = "", titleClassName = "" }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Card className={`transition-all h-fit ${className}`}>
            <div className="flex justify-between items-center min-h-[40px]"> 
                <div className={`flex items-center ${titleClassName}`}>
                    {icon && <div className="text-gray-400">{icon}</div>}
                    <h2 className={`text-lg font-semibold pl-2`}>{title}</h2>
                </div>
                <div className="flex items-center gap-2">
                    {dropdownOptions && <DropdownMenu options={dropdownOptions} />}
                    <Button variant="ghost" onClick={() => setCollapsed(!collapsed)}>
                        <FaChevronDown className={`transition-transform ${collapsed ? "" : "rotate-180"}`} />
                    </Button>
                </div>
            </div>

            {!collapsed && <div className="mt-3">{children}</div>}
        </Card>
    );
};

export default Panel;
