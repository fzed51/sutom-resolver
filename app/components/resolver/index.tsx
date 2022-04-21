import React, { FC, useState } from "react";
import { ConfigApp, Proposal } from "../../types";
import HistoryViewer from "../HistoryViewer";

export interface ResolverProps {
  config: ConfigApp;
  onReset: () => void;
}

export const Resolver: FC<ResolverProps> = ({}) => {
  const [history, setHistory] = useState<Proposal[]>([
    {
      word: "devoirs",
      match: ["1", "1", ".", ".", ".", "1", "1"],
    },
  ]);

  return (
    <div className="resolver">
      <section className="old-proposals">
        <HistoryViewer history={history} />
      </section>
      <section className="suggestions"></section>
      <section className="proposal"></section>
    </div>
  );
};

export default Resolver;
