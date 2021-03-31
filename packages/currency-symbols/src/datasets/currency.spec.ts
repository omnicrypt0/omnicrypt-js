import { Currency } from "./currency";

it("should get currencies as string", async () => {
  expect(typeof Currency.Bitcoin).toBe("string");
  expect(typeof Currency.Ethereum).toBe("string");
});
