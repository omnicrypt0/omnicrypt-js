# @omnicrypt/currency-symbols

A collection of the symbols for many different currencies.

## Usage

### Node

Add the library to your current package:

```shell
$ npm install @omnicrypt/currency-symbols
```

Import any of your needed members using `require` or regular `import` statements depending on your project configuration:

```js
// CommonJS
const { Currency } = require("@omnicrypt/currency-symbols");

// ESM
import { Currency } from "@omnicrypt/currency-symbols";
```

## API

### `Currency`

A list of both world currencies and cryptocurrencies. The properties of the object are the currency alias and the value is the currency's symbol.

#### Example

```js
const btc = Currency.Bitcoin; // "BTC"
```

### `WorldCurrency`

// TODO

### `CryptoCurrency`

// TODO

### `createCustomCurrency`

// TODO

## License

[MIT](./LICENSE)
