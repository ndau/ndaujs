# ndaujs
This is a common JavaScript repository. This will contain any code that can be shared by the ndau JavaScript codebase.

To use this repository you must add is as a private repository within your `package.json`. To do that go to Settings > Developer settings on GitHub. There you can switch to Personal access tokens and click Generate new token. Once you define the scopes for the token you can use this token in package.json as follows:

`"ndaujs": "git+https://4c7ee8df5fc91c55b2553569d39189a2c4fa6ea1:x-oauth-basic@github.com/oneiro-ndev/ndaujs.git#desired-branch"`

`4c7ee8df5fc91c55b2553569d39189a2c4fa6ea1` is the generated token, `oneiro-ndev/ndaujs` is the repository location and desired-branch is the branch we want.

## JavaScript Utilities
Here is a list of all the utilities present within this archive.

### `helpers/Address.js`
#### `truncate`
Truncate the address to a readable string within the application
##### Parameters
`address` Address to be truncated
##### Return Values
The 16 character truncated address