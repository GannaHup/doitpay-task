import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import InputText from ".";

describe("InputText Component", () => {
  test("renders label and input", () => {
    render(<InputText label="Name" value="" onChange={() => {}} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByDisplayValue("")).toBeTruthy();
  });

  test("text mode: updates value onChange", async () => {
    const user = userEvent.setup();
    let value = "";
    render(
      <InputText
        label="Name"
        value={value}
        onChange={(val) => {
          value = val;
        }}
      />
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "Ironman");
    expect(input).toHaveValue("Ironman");
    expect(value).toBe("Ironman");
  });

  test("number mode: allows only numbers and formats as thousand separator", async () => {
    const user = userEvent.setup();
    let value = "";
    render(
      <InputText
        label="Amount"
        mode="number"
        value={value}
        onChange={(val) => {
          value = val;
        }}
      />
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "534askks39346ksdjs7");
    expect(input).toHaveValue("534.393.467");
    expect(value).toBe("534393467");
  });

  test("card-number mode: formats as XXXX XXXX XXXX XXXX", async () => {
    const user = userEvent.setup();
    let value = "";
    render(
      <InputText
        label="Card Number"
        mode="card-number"
        value={value}
        onChange={(val) => {
          value = val;
        }}
      />
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "4229382983928392");
    expect(input).toHaveValue("4229-3829-8392-8392");
    expect(value).toBe("4229382983928392");
  });

  test("shows error message if error prop is passed", () => {
    render(
      <InputText
        label="Name"
        value=""
        error="Name is required"
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });
});
