import { describe, test, expect, vi } from "vitest";
import AddNewWallet from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderAddNewWallet = () => {
  const onAddNewWallet = vi.fn();

  render(<AddNewWallet onAddNewWallet={onAddNewWallet} />);
  return { onAddNewWallet };
};

describe("AddNewWallet Component", () => {
  test("renders text correctly", () => {
    renderAddNewWallet();

    expect(screen.getByText("Add new Card")).toBeInTheDocument();
  });

  test("calls onAddNewWallet when clicked", async () => {
    const user = userEvent.setup();
    const { onAddNewWallet } = renderAddNewWallet();
    const card = screen.getByTestId("add-new-card");

    expect(card).toBeInTheDocument();
    await user.click(card);
    expect(onAddNewWallet).toHaveBeenCalledTimes(1);
  });
});
