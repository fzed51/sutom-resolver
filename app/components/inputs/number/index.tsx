import React, { ChangeEvent, FC, FocusEvent, useMemo, useState } from "react";
import { InputProps } from "../common";
import { idGen } from "../IdGen";
import "../common.scss";

export interface NumberProps extends InputProps<number> {
  min: number;
}

const normalizeValue = (min: number, value: number): number =>
  Math.max(min, value);

export const InputNumber: FC<NumberProps> = ({ label, value, onChange, min }) => {
  const id = useMemo(() => idGen("number"), []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const reg = /^[0-9]*$/;
    console.debug(v, reg.test(v));
    if (reg.test(v)) {
      if (!isNaN(window.Number(v))) {
        onChange(normalizeValue(min, window.Number(v)));
      }
    }
  };
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        value={normalizeValue(min, window.Number(value || 0))}
        onChange={handleChange}
        onFocus={(e: FocusEvent<HTMLInputElement>) => e.target.select()}
      />
    </div>
  );
};

export default InputNumber;
