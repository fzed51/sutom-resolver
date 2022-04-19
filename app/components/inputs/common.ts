export interface InputProps<T> {
  label?: string;
  value: T | undefined;
  onChange: (v: T) => void;
}
