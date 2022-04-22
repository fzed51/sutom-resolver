import React, { FC } from "react";

export interface SuggestionSelectorProps {
  suggestion: string[];
  onSelect: (s: string) => void;
}

export const SuggestionSelector: FC<SuggestionSelectorProps> = ({
  suggestion,
  onSelect,
}) => {
  return (
    <div>
      {suggestion.map((word) => (
        <div key={word} onClick={() => onSelect(word)}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default SuggestionSelector;
