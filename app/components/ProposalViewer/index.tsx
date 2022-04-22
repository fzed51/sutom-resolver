import React, { CSSProperties, FC, MouseEvent } from "react";
import { Proposal } from "../../types";
import "./style.scss";

export interface ProposalViewerProps {
  proposal: Proposal;
  onClick?: (i: number) => void;
}

export const ProposalViewer: FC<ProposalViewerProps> = ({
  proposal,
  onClick,
}) => {
  console.log("ProposalViewer", {
    proposal,
    onClick,
  });
  const { word, match } = proposal;
  const length = word.length;
  const letters = word.split("");
  const handleClick = (index: number) => (e: MouseEvent) => {
    e.preventDefault();
    console.log("click", index);
    onClick && onClick(index);
  };
  return (
    <div className="proposal-view">
      {letters.map((letter, index) => {
        let style: CSSProperties = {};
        switch (match[index] || ".") {
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
              backgroundColor: "#ff0",
              color: "#000",
            };
            break;
        }
        return (
          <div
            className="proposal-view_cell"
            key={index}
            style={style}
            onClick={handleClick(index)}
          >
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default ProposalViewer;
