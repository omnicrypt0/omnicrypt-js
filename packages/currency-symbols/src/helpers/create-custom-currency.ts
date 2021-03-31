import { Currency } from "../datasets/currency";

export interface CreateCustomCurrencyOpts {
  includeDefaultCurrencies?: boolean;
}

/**
 * Creates a custom currency object that behaves just like the default one exported but allows you to add your own with awesome TypeScript typing.
 * @param currency The currency object which contains the aliases and symbols for different currencies. Make sure you add the `as const` suffix after you define the object to make sure you have template literal types instead of `string` for the currency symbols or else this type will be inferred as `never` which will stop compilation from occuring.
 * @param options The object that allows you to specify the shape of the created currency object.
 * @returns The generated currency object.
 */
export function createCustomCurrency<
  T extends Record<string, string>,
  F extends CreateCustomCurrencyOpts = CreateCustomCurrencyOpts & {
    includeDefaultCurrencies: false;
  }
>(
  currency: string extends T[keyof T] ? never : T, // must be a const object (casted to const via `as const`)
  options: F = { includeDefaultCurrencies: false } as F
): F extends { includeDefaultCurrencies: false } ? T : T & typeof Currency {
  const generatedCurrencies =
    options.includeDefaultCurrencies === true
      ? { ...Currency, ...currency }
      : currency;

  // the type is conditional at the function-level so we need to cast it to `any`; use tests for reassurance on the behavior
  return generatedCurrencies as any;
}
