import { cn } from "@libs/classnames";
import type { DatePickerProps } from "./DatePicker.types";

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  className,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-slate-900 text-sm">{label}</div>}
      <input
        type="date"
        className={cn(
          "w-full outline-none cursor-pointer border border-gray-300 rounded py-1.5 px-3",
          { "border-red-400": Boolean(error) },
          className
        )}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
      {error && <div className="text-red-400 text-xs">{error}</div>}
    </div>
  );
};

export default DatePicker;
