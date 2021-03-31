import { CryptoCurrency } from "./crypto-currency";
import { WorldCurrency } from "./world-currency";

// purposefully not using TypeScript enums for more understandable typing behavior
export const Currency = {
  ...CryptoCurrency,
  ...WorldCurrency,
} as const;
