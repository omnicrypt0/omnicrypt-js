import { createCustomCurrency } from "./create-custom-currency";

describe("Custom Currencies", () => {
  it("creating custom currency object", async () => {
    const Currency = createCustomCurrency({ FooCoin: "FOO" } as const);

    expect(Currency.FooCoin).toBe("FOO");
    // @ts-expect-error ts(2339)
    expect(Currency.Bitcoin).toBeUndefined();
  });

  it("creating custom currency object w/ options", async () => {
    const Currency = createCustomCurrency({ FooCoin: "FOO" } as const, {
      includeDefaultCurrencies: true,
    });

    expect(Currency.FooCoin).toBe("FOO");
    expect(Currency.Bitcoin).toBe("BTC");
  });
});
