import React, { ChangeEvent, FC, useMemo } from "react";
import { InputProps } from "../common";
import { idGen } from "../IdGen";

export interface InputRangeProps extends InputProps<number> {
  min?: number;
  max?: number;
}

export const InputRange: FC<InputRangeProps> = ({
  onChange,
  value,
  label,
  min = 0,
  max = 100,
}) => {
  const id = useMemo(() => idGen("number"), []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    console.debug(v);
    if (!isNaN(window.Number(v))) {
      onChange(window.Number(v));
    }
  };
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id}>
          {label} : {value || min}
        </label>
      )}
      <input
        type="range"
        id={id}
        max={max}
        min={min}
        value={value || min}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputRange;
