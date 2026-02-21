import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import WalletCarousel from ".";

describe("WalletCarousel", () => {
  const wallets = [
    {
      holder: "John",
      number: "3498482895028563",
      limit: "1000",
      color: "#fcba03",
      expiredAt: "2026-12-30",
    },
    {
      holder: "Doe",
      number: "3498482895028565",
      limit: "1000",
      color: "#fcba03",
      expiredAt: "2027-12-30",
    },
    {
      holder: "Jane",
      number: "3498482895028567",
      limit: "2000",
      color: "#4a03fc",
      expiredAt: "2029-12-30",
    },
  ];

  it("renders wallet cards", () => {
    render(<WalletCarousel wallets={wallets} onSeeDetail={() => {}} />);

    expect(screen.getAllByTestId("wallet-card")).toHaveLength(wallets.length);
  });

  it("calls onSeeDetail when card clicked", () => {
    const onSeeDetail = vi.fn();

    render(<WalletCarousel wallets={wallets} onSeeDetail={onSeeDetail} />);

    fireEvent.click(screen.getAllByTestId("wallet-card")[0]);

    expect(onSeeDetail).toHaveBeenCalledWith(wallets[0]);
  });

  it("hides prev button when at beginning", () => {
    render(<WalletCarousel wallets={wallets} onSeeDetail={() => {}} />);

    const prevButton = document.querySelector(".navigation-prev");

    expect(prevButton?.classList.contains("hidden")).toBe(true);
  });
});
