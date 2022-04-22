import React, { FC, useState } from "react";
import { ConfigApp, Proposal } from "../../types";
import HistoryViewer from "../HistoryViewer";
import ProposalInput from "../ProposalInput";
import SuggestionSelector from "../suggestion-selector";

const arrayFill = (length: number, value: string) => {
  const a = [];
  for (length; length > 0; length--) {
    a.push(value);
  }
  return a;
};

export interface ResolverProps {
  config: ConfigApp;
  onReset: () => void;
}

export const Resolver: FC<ResolverProps> = ({ config }) => {
  const [suggestions, setSuggestions] = useState<string[]>(["dehors"]);

  const [history, setHistory] = useState<Proposal[]>([
    {
      word: "devoirs",
      match: ["1", "1", ".", ".", ".", "1", "1"],
    },
    {
      word: "dessous",
      match: ["1", "1", "1", ".", ".", "0", "1"],
    },
  ]);
  const [current, setCurrent] = useState<Proposal | undefined>(undefined);
  const handleSelect = (word: string) => {
    const length = word.length;
    const match = arrayFill(length, ".");
    setCurrent({ word, match });
  };
  const handleResolve = () => {
    const body = {
      config,
      proposals: [...history, current],
    };
  };
  return (
    <div className="resolver">
      <section className="old-proposals">
        <HistoryViewer history={history} />
      </section>
      <section className="suggestions">
        <SuggestionSelector suggestion={suggestions} onSelect={handleSelect} />
      </section>
      <section className="proposal">
        {current && (
          <>
            <ProposalInput value={current} onChange={setCurrent} />
            <button onClick={handleResolve}>Résoudre</button>
          </>
        )}
      </section>
    </div>
  );
};

export default Resolver;
