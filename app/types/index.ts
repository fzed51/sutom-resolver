export interface ConfigApp {
  length: number;
  letter: string;
}

export interface Proposal {
  word: string;
  match: ("0" | "." | "1")[];
}
