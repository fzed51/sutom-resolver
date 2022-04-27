export interface ButtonProps {
  children: string | React.ReactElement;
  onClick?: () => void;
  submitter?: boolean;
}
