# ndaujs
This is a common JavaScript repository. This will contain any code that can be shared by the ndau JavaScript codebase.

To use this repository you must add is as a private repository within your `package.json`. To do that simply run this command:

`npm install oneiro-ndev/ndaujs#master`

This will add the repo to your `package.json`. See below for the available functions.

## Testing
Testing is the only way to run these functions so there should be as many tests as you can think of for your functions in this repo. When you run the test command below the code is transpiled with babel into the bin folder and then run there. This is to make sure that a ES5 consumer would like to use this code, they can.

`yarn test`

## Functions Availble
Please check the top level `index.js` for all functions available and how to add your own.