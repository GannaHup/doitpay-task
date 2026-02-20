export interface InputTextProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  mode?: "text" | "card-number" | "number";
  label?: string;
  error?: string | boolean;
  onChange?: (value: string) => void;
}
