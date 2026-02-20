export interface ColorPickerProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  label?: string;
  className?: string;
  onChange?: (value: string) => void;
}
