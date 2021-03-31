import type { Currency } from "./datasets/currency";

/**
 * Allows a value to be either a member of `Currency` or a string with the same value as one of the currency symbols.
 *
 * ## Examples
 *
 * 	const bitcoinSymbol: CurrencySymbol = "BTC";
 * 	const ethereumSymbol: CurrencySymbol = "BTC";
 * 	const usdSymbol: CurrencySymbol = Currency.USDollar;
 *
 * 	// defining own currency type w/o `createCustomCurrency`
 *
 * 	interface CustomSymbolSchema {
 * 		// this could obviously still be a `const` object and pass it in via `typeof <NAME>`
 * 		FooCoin: "FOO"
 * 	}
 *
 * 	const customSymbol: CurrencySymbol<CustomSymbolSchema> = "FOO";
 *
 * 	// const customSymbol: CurrencySymbol<CustomSymbolSchema> = "BTC"; <- invalid because "BTC" is not in `CustomSymbolSchema`
 *
 * ## Notes
 *
 * - This is strict, therefore you are not able to add a member of `Currency` that does not exist or a string like `ASDF`.  If you do not want it to be strict, then just set your type of the currency to be `string`.
 *
 * - You would need to do `YOUR_NEW_SYMBOLS & typeof Currency` if you are specifying the `ValidSymbols` type and want to keep the defaults.
 */
export type CurrencySymbol<
  ValidSymbols extends Record<string, string> = typeof Currency
> =
  // using string literal wrappers detaches them from the types in tooltips
  // ex: just "FOO" instead of CurrencySymbol<{ FooCoin: "FOO" }>
  `${ValidSymbols[keyof ValidSymbols]}`;
