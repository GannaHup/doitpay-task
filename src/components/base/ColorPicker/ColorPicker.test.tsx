import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ColorPicker from ".";
import type { ColorPickerProps } from "./ColorPicker.types";

const renderColorPicker = (props?: ColorPickerProps) => {
  const onChange = vi.fn();

  render(
    <ColorPicker
      label="Pick Color"
      value="#000000"
      onChange={onChange}
      data-testid="color-picker"
      {...props}
    />
  );
  return { onChange };
};

describe("ColorPicker component", () => {
  test("renders label correctly", () => {
    renderColorPicker();

    expect(screen.getByText("Pick Color")).toBeInTheDocument();
  });

  test("renders input with default value", () => {
    renderColorPicker({ value: "#ff0000" });

    console.log(screen.getByDisplayValue("#ff0000"));
    expect(screen.getByDisplayValue("#ff0000")).toBeInTheDocument();
  });

  test("calls onChange when color changes", async () => {
    const { onChange } = renderColorPicker();

    const input = screen.getByTestId("color-picker");

    expect(input).toBeInTheDocument();
    await fireEvent.change(input, { target: { value: "#ff0000" } });

    expect(onChange).toHaveBeenCalled();
  });
});
