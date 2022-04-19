let index = 0;

export const idGen = (prefix: string = ""): string => {
  index++;
  return prefix + index.toString(36);
};
