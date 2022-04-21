import React, { FC } from "react";
import { Proposal } from "../../types";
import ProposalViewer from "../ProposalViewer";

export interface HistoryViewerProps {
  history: Proposal[];
}

export const HistoryViewer: FC<HistoryViewerProps> = ({ history }) => {
  console.log("HistoryViewer", { history });
  return (
    <div className="history">
      {history.map((proposal, index) => (
        <ProposalViewer key={index} proposal={proposal} />
      ))}
    </div>
  );
};

export default HistoryViewer;
