import React from "react";

type MyButtonProps = {
  label: string;
  onClick?: () => void;
};

export const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {label}
    </button>
  );
};
