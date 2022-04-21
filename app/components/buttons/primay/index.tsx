import React, { FC } from "react";
import "../comon.scss";

export interface PrimaryProps {
  children: string | React.ReactElement;
  onClick?: () => void;
  submitter?: boolean;
}

export const ButtonPrimary: FC<PrimaryProps> = ({ children, onClick, submitter }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className="btn"
      type={submitter ? "submit" : "button"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
