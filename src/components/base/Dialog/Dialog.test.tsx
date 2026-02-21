import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dialog from ".";

describe("Dialog component", () => {
  const renderDialog = (props = {}) => {
    const onClose = vi.fn();

    render(
      <Dialog isOpen={true} onClose={onClose} {...props}>
        <div data-testid="dialog-content">Dialog Content</div>
      </Dialog>
    );

    return { onClose };
  };

  it("renders when isOpen is true", () => {
    renderDialog();
    expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Dialog isOpen={false} onClose={() => {}}>
        <div>Hidden</div>
      </Dialog>
    );

    expect(screen.queryByText("Hidden")).toBeNull();
  });

  it("calls onClose when Escape is pressed", () => {
    const { onClose } = renderDialog();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking outside (overlay)", () => {
    const { onClose } = renderDialog();

    fireEvent.mouseDown(document.body);

    expect(onClose).toHaveBeenCalled();
  });

  it("does not close when isLoading is true", () => {
    const { onClose } = renderDialog({ isLoading: true });

    fireEvent.mouseDown(document.body);

    expect(onClose).not.toHaveBeenCalled();
  });
});
