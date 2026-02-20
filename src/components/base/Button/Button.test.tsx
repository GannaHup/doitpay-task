import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Button from ".";

describe("Button Component", () => {
  test("renders children", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button", { name: "Click" });
    expect(button).toBeInTheDocument();
  });

  test("applies primary variant", () => {
    render(<Button variant="primary">Button Variant Primary</Button>);

    const button = screen.getByRole("button", {
      name: "Button Variant Primary",
    });
    expect(button.className).toContain("bg-indigo-500");
  });

  test("check secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: "Secondary" });
    expect(button.className).toContain("bg-white");
  });

  test("check full width class when widthFull is true", () => {
    render(<Button widthFull>Width Full</Button>);
    const button = screen.getByRole("button", { name: "Width Full" });
    expect(button.className).toContain("w-full");
  });

  test("check shape pill correctly", () => {
    render(<Button shape="pill">Pill</Button>);
    const button = screen.getByRole("button", { name: "Pill" });
    expect(button.className).toContain("rounded-full");
  });

  test("check disabled prop correctly", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });
});
