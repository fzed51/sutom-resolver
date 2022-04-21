import { watch } from "fs";
import React, { CSSProperties, FC } from "react";
import { Proposal } from "../../types";

export interface ProposalViewerProps {
  proposal: Proposal;
}

export const ProposalViewer: FC<ProposalViewerProps> = ({ proposal }) => {
  const { word, match } = proposal;
  const length = word.length;
  const letters = word.split("");

  return (
    <div className="proposal-view">
      {letters.map((letter, index) => {
        let style: CSSProperties = {};
        switch (watch[index] || ".") {
          case ".":
            style = {
              backgroundColor: "#00f",
              color: "#fff",
            };
            break;
          case "1":
            style = {
              backgroundColor: "#f00",
              color: "#fff",
            };
            break;
          case "0":
            style = {
              backgroundColor: "#0ff",
              color: "#000",
            };
            break;
        }
        return (
          <div key={index} style={style}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default ProposalViewer;
