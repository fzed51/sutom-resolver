import React, { FC } from "react";
import { ButtonProps } from "../common";
import "../comon.scss";

export const ButtonPrimary: FC<ButtonProps> = ({ children, onClick, submitter }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className="btn primary"
      type={submitter ? "submit" : "button"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
