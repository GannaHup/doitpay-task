import type React from "react";
import type { InputTextProps } from "./InputText.types";
import { useState } from "react";
import formatter from "@libs/formatter";
import { cn } from "@libs/classnames";

const InputText: React.FC<InputTextProps> = ({
  value,
  label,
  error,
  mode = "text",
  className,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(
    mode === "card-number" ? formatter.cardNumber(String(value)) : value
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.currentTarget.value;

    if (mode === "card-number") {
      const formatted = formatter.cardNumber(rawValue);
      setInputValue(formatted);
      onChange?.(formatted.replace(/\D/g, "").slice(0, 16));
      return;
    }

    if (mode === "number") {
      const numeric = Number(rawValue.replace(/\D/g, ""));
      const formatted = Number(numeric).toLocaleString("id-ID");
      setInputValue(formatted);
      onChange?.(String(formatted).replace(/\D/g, ""));
      return;
    }

    setInputValue(rawValue);
    onChange?.(rawValue);
  };
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-slate-900 text-sm">{label}</div>}

      <div className="flex flex-col gap-1">
        <input
          type="text"
          value={inputValue}
          aria-label={label}
          className={cn(
            "border border-gray-300 rounded text-slate-900 py-1.5 px-3 outline-0",
            { "border-red-400": Boolean(error) },
            className
          )}
          {...props}
          onChange={handleChange}
        />
        {error && <div className="text-red-400 text-xs">{error}</div>}
      </div>
    </div>
  );
};

export default InputText;
