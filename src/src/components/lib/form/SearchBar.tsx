import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Search...", className = "" }) => {
    return (
        <div className={`relative w-full ${className}`}>
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
    );
};

export default SearchBar;