import React from "react";

interface SimpleCardProps {
    children: React.ReactNode;
    className?: string;
    background?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ children, className = "", background }) => {
    return (
        <div className={`${background ?? "bg-zinc-800"} text-white p-4 rounded-xl ${className}`}>
            {children}
        </div>
    );
};

export default SimpleCard;
