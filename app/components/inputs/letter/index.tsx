import React, { FC, KeyboardEvent, MouseEvent, useMemo } from "react";
import { InputProps } from "../common";
import cn from "classnames";
import { idGen } from "../IdGen";
import "../common.scss";
import "./letter.scss";

export interface LetterProps extends InputProps<string> {}

const layout = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const InputLetter: FC<LetterProps> = ({ label, value, onChange }) => {
  const id = useMemo(() => idGen("letter"), []);
  const handleChange = (l: string) => (e: MouseEvent) => {
    onChange(l);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(e);
    if (layout.toUpperCase().split("").includes(e.key.toUpperCase())) {
      onChange(e.key.toUpperCase());
    }
  };
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <div
        tabIndex={1}
        onKeyDown={handleKeyPress}
        className="input-letter_keybord"
      >
        {layout.split("").map((l) => (
          <div
            key={l}
            className={cn("input-letter_key", {
              selected: l === value,
            })}
            onClick={handleChange(l)}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputLetter;
