import React from "react";

type ButtonProps = {
  label: string;
  primary?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  return (
      <button
          className={`px-4 py-2 rounded-md ${
              primary ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={onClick}
      >
        {label}
      </button>
  );
};

export default Button;