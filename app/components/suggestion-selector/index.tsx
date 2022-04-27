import React, { FC, useEffect, useMemo, useState } from "react";
import ButtonSecondary from "../buttons/secondary";

export interface SuggestionSelectorProps {
  suggestion: string[];
  onSelect: (s: string) => void;
}

export const SuggestionSelector: FC<SuggestionSelectorProps> = ({
  suggestion,
  onSelect,
}) => {
  const lengthPage = 20;
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    setPage(0);
  }, [suggestion]);
  const isFirst: boolean = page === 0;
  const isLast: boolean = page >= Math.floor(suggestion.length / 20);
  const next = () => setPage((p) => p + 1);
  const prev = () => setPage((p) => p - 1);
  const showSuggest = useMemo(
    () => suggestion.slice(page * lengthPage, (page + 1) * lengthPage - 1),
    [suggestion, page, lengthPage]
  );
  return (
    <div>
      {!isFirst && <ButtonSecondary onClick={prev}>Prev</ButtonSecondary>}
      {showSuggest.map((word) => (
        <div key={word} onClick={() => onSelect(word)}>
          {word}
        </div>
      ))}
      {!isLast && <ButtonSecondary onClick={next}>Next</ButtonSecondary>}
    </div>
  );
};

export default SuggestionSelector;
