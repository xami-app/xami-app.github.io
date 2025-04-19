import React from "react";

interface NoAPIResponseCardProps {
    className?: string;
}

const NoAPIResponseCard: React.FC<NoAPIResponseCardProps> = ({ className = "" }) => {
    return (
        <div className={`bg-zinc-800 text-white rounded-xl ${className}`}>
            <p className="text-red-300">Die API ist derzeit nicht erreichbar. Läuft der Server noch?</p>
        </div>
    );
};

export default NoAPIResponseCard;
