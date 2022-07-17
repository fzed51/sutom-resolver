import React, { FC, useEffect, useState } from "react";
import { resolve } from "../../api";
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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [history, setHistory] = useState<Proposal[]>([]);
  const [current, setCurrent] = useState<Proposal | undefined>(undefined);
  const getWords = () => {
    if (current === undefined) {
      return resolve(config, history).then((words) => setSuggestions(words));
    }
    return resolve(config, [...history, current]).then((words) =>
      setSuggestions(words)
    );
  };

  const handleSelect = (word: string) => {
    const length = word.length;
    const match = arrayFill(length, ".");
    setCurrent({ word, match });
  };
  useEffect(() => {
    getWords();
  }, []);
  const handleResolve = () => {
    if (current !== undefined) {
      getWords().then(() => {
        setHistory((h) => [...h, current]);
      });
    }
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
