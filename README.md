# ndaujs
This is a common JavaScript repository. This will contain any code that can be shared by the ndau JavaScript codebase.

To use this repository you must add is as a private repository within your `package.json`. To do that simply run this command:

`npm install oneiro-ndev/ndaujs#master`

This will add the repo to your `package.json`. See below for the available functions.

## Testing
Testing is the only way to run these functions so there should be as many tests as you can think of for your functions in this repo. When you run the test command below, the code is transpiled with babel into the bin folder and then run there. This is to make this library consumable in ES5.

`yarn test`

## Functions Availble
Please check the top level `index.js` for all functions available and how to add your own.

## Code styles

### Error messages and logging

When errors are caught but no action is performed, they are simply logged at the `error` level. When an action is performed or expected, caught errors are logged with the `debug` level. Error messages, unless specifically meant for app users are lowercase with minimal punctuation for ease of concatenation. They laregly follow the format `could not X: ${e.message}`. All error messages should be unique so they are easy to search for in the code. Avoid error messages like `throw new Error('failed')` and use for example `throw new Error('could not post to ${address} while sending ${txType}')`.
