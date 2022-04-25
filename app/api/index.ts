import { ConfigApp, Proposal } from "../types";


export const resolve = (
  config: ConfigApp,
  proposals: Proposal[]
): Promise<string[]> => {
  const body = JSON.stringify({
    config,
    proposals
  });
  return fetch("http://localhost:8787/resolve.php", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  }).then((rep) => rep.json());
};
