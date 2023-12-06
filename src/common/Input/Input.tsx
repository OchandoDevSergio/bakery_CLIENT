import "./Input.css";
import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  value: string | number | undefined;
  placeholder: string;
  name: string;
  className: string;
  manejadora: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ type, value, placeholder, name, manejadora }) => {
  return (
    <input
      type={type}
      value={value || ""}
      placeholder={placeholder}
      name={name}
      className="defaultInput"
      onChange={(e) => manejadora(e)}
    />
  );
};
