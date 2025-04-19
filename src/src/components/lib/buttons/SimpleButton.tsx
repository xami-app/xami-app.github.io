import React from "react";

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ variant = "primary", className, ...props }) => {
  return (
    <button
      className={`px-3 py-1.5 rounded-md font-medium transition ${
        variant === "primary" ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-zinc-700 text-white"
      } ${className}`}
      {...props}
    />
  );
};

export default SimpleButton;
