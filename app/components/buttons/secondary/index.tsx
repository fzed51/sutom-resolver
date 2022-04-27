import React, { FC } from "react";
import { ButtonProps } from "../common";
import "../comon.scss";

export const ButtonSecondary: FC<ButtonProps> = ({
  children,
  onClick,
  submitter,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className="btn secondary"
      type={submitter ? "submit" : "button"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
