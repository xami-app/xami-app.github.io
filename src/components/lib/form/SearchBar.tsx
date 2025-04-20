import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  id,
  value,
  onChange,
  onFocus,
  inputRef,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        ref={inputRef}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default SearchBar;
