import React, { FC } from "react";
import { Proposal } from "../../types";
import ProposalViewer from "../ProposalViewer";

export interface ProposalInputProps {
  value: Proposal;
  onChange: (v?: Proposal) => void;
}

export const ProposalInput: FC<ProposalInputProps> = ({ value, onChange }) => {
  const handleDelete = () => {
    onChange(undefined);
  };
  const handleChangeMatch = (index: number) => {
    const { match } = value;
    console.log(value, index, match[index]);
    if (match[index] === ".") {
      match[index] = "0";
    } else if (match[index] === "0") {
      match[index] = "1";
    } else {
      match[index] = ".";
    }
    onChange({ ...value, match });
  };
  return (
    <div>
      <div>
        <ProposalViewer proposal={value} onClick={handleChangeMatch} />
      </div>
      <div>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
};

export default ProposalInput;
