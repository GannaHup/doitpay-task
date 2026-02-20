import { describe, test, expect } from "vitest";
import formatter from "./formatter";

describe("formatter cardNumber", () => {
  test("removes non-digits and formats with dash every 4 digits", () => {
    const result = formatter.cardNumber("8942 3028-9012abcd8394");
    expect(result).toBe("8942-3028-9012-8394");
  });

  test("limits to 16 digits", () => {
    const result = formatter.cardNumber("93394739439837933495");

    expect(result).toBe("9339-4739-4398-3793");
  });
});

describe("formatter.dateMMYYYY", () => {
  test("formats ISO date to MM/YYYY", () => {
    const result = formatter.dateMMYYYY("2029-03-15");
    expect(result).toBe("03/2029");
  });
});

describe("formatter.maskCardNumber", () => {
  test("masks all but last 4 digits", () => {
    const result = formatter.maskCardNumber("3498439893739473");
    expect(result).toBe("**** **** **** 9473");
  });
});
