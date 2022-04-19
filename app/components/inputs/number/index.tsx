import React, { ChangeEvent, FC } from "react";
import { InputProps } from "../common";
import { idGen } from "../IdGen";
import "../common.scss"

export interface NumberProps extends InputProps<number> {
  min: number;
}

const normalizeValue = (min: number, value: number): number =>
  Math.max(min, value);

export const Number: FC<NumberProps> = ({ label, value, onChange, min }) => {
  const id = idGen("number");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (!isNaN(window.Number(v))) {
      onChange(normalizeValue(min, window.Number(v)));
    }
  };
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        defaultValue={normalizeValue(min, value || 0)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Number;
