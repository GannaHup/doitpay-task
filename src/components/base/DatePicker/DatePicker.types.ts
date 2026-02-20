export interface DatePickerProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  label?: string;
  className?: string;
  error?: string;
  onChange: (date: string) => void;
}
