import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import AddNewWalletDialog from ".";

const renderDialog = (props = {}) => {
  const onClose = vi.fn();
  const onCreate = vi.fn();

  render(
    <AddNewWalletDialog
      isOpen
      onClose={onClose}
      onCreate={onCreate}
      {...props}
    />
  );

  return { onClose, onCreate };
};

describe("AddNewWalletDialog", () => {
  test("shows validation errors when clicking Add with empty fields", async () => {
    const user = userEvent.setup();
    renderDialog();

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(
      screen.getByText("Credit Card Holder is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Credit Card Number is required")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Credit Card Limit is required")
    ).toBeInTheDocument();

    expect(screen.getByText("Expired Date is required")).toBeInTheDocument();
  });

  test("shows validation errors when clicking Add unless the field is empty", async () => {
    const user = userEvent.setup();
    const { onCreate } = renderDialog();

    await user.type(
      screen.getByRole("textbox", { name: "Credit Card Holder" }),
      "Jo"
    );

    await user.type(
      screen.getByRole("textbox", { name: "Credit Card Number" }),
      "983809184934"
    );

    await user.type(
      screen.getByRole("textbox", {
        name: "Credit Card Spend Limit",
      }),
      "10000"
    );

    await user.type(screen.getByLabelText("Expired At"), "2026-12-01");

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(onCreate).not.toHaveBeenCalledTimes(1);
    expect(
      screen.getByText("Credit Card Holder must be at least 3 characters")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Credit Card Number must be 16 digits")
    ).toBeInTheDocument();
  });

  test("calls onCreate when form is valid", async () => {
    const user = userEvent.setup();
    const { onCreate } = renderDialog();

    await user.type(
      screen.getByRole("textbox", { name: "Credit Card Holder" }),
      "John Doe"
    );

    await user.type(
      screen.getByRole("textbox", { name: "Credit Card Number" }),
      "9838091849347104"
    );

    await user.type(
      screen.getByRole("textbox", {
        name: "Credit Card Spend Limit",
      }),
      "10000"
    );

    await user.type(screen.getByLabelText("Expired At"), "2026-12-01");

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        holder: "John Doe",
        number: "9838091849347104",
        limit: "10000",
        expiredAt: "2026-12-01",
      })
    );
  });

  test("calls onClose when clicking Cancel", async () => {
    const user = userEvent.setup();
    const { onClose } = renderDialog();

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
