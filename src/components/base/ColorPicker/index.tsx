import type React from "react";
import type { ColorPickerProps } from "./ColorPicker.types";
import { cn } from "@libs/classnames";

const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  className,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-slate-900 text-sm">{label}</div>}
      <input
        type="color"
        className={cn("w-full outline-none cursor-pointer", className)}
        {...props}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

export default ColorPicker;
