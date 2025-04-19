import React, { useState, useRef, useEffect, ReactNode } from "react";
import { SlOptionsVertical } from "react-icons/sl";

export interface SimpleDropdownMenuOption {
    icon?: ReactNode;
    title: string;
    onClick: (close: () => void) => void;
}

interface SimpleDropdownMenuProps {
    options: SimpleDropdownMenuOption[];
    className?: string;
    buttonClassName?: string;
    icon?: ReactNode;
}

const SimpleDropdownMenu: React.FC<SimpleDropdownMenuProps> = ({
    options,
    className = "",
    buttonClassName = "",
    icon = <div className="px-2 py-3"><SlOptionsVertical /></div>,
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    useEffect(() => {
        if (open && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY + 4, // 4px Abstand zum Button
                left: rect.right + window.scrollX - 4, // rechts vom button
            });
        }
    }, [open]);

    function close() {
        setOpen(false);
    }

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                ref={buttonRef}
                onClick={() => setOpen(!open)}
                className={`rounded-md transition-colors duration-200 ${buttonClassName}`}
            >
                {icon}
            </button>

            {open && (
                <div
                    className="fixed z-[100] mt-1 w-fit text-white bg-zinc-800 rounded-md shadow-md ml-[-12px]"
                    style={{ top: position.top, left: position.left }}
                >
                    {options.map((option, index) => {
                        return (
                            <button
                                key={index}
                                className="block text-left px-4 py-2 text-gray-300 hover:bg-zinc-600 hover:text-white transition-colors duration-200 w-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    option.onClick(close);
                                }}
                            >
                                <div className="flex flex-row items-center">
                                    {option?.icon && <span className="mr-3">{option.icon}</span>} <span className="whitespace-nowrap">{option.title}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SimpleDropdownMenu;