import React, { ChangeEvent, FC } from "react";
import { InputProps } from "../common";
import { idGen } from "../IdGen";
import "../common.scss";

export interface LetterProps extends InputProps<string> {}

export const Letter: FC<LetterProps> = ({ label, value, onChange }) => {
  const id = idGen("letter");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const l = v.toLowerCase().at(-1);
    const regex = /[a-z]/;
    if (regex.test(l)) {
      onChange(l);
    }
  };
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} value={value || "a"} onChange={handleChange} />
    </div>
  );
};

export default Letter;
