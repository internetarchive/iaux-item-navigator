[![Build Status](https://travis-ci.com/internetarchive/iaux-item-navigator.svg?branch=master)](https://travis-ci.com/internetarchive/iaux-item-navigator) [![codecov](https://codecov.io/gh/internetarchive/iaux-item-navigator/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-item-navigator)

# Internet Archive Item Navigator - theater menu manager

`<ia-item-navigator>` is a custom web component that makes an item's details theater.
The Item Navigator helps instantiate all of the components one needs to create an item theater:
- side menu
- menu shortcuts
- fullscreen management
- receives/creates a shared resize observer
- receives/shares a `<modal-manager>`
- slots for custom theater & header loads

The Item Navigator's primary responsibility is to display the side menus, shortcuts, and the theater in browser window immersion "fullscreen".

The only business logic that is housed is determining which theater navigator to use given an `itemType`.
Currently supported:
- bookreader's `<book-navigator>`
- no theater available

## Usage
Generic:
```
const iaItem = <MetadataResponse>;
<ia-item-navigator .item=${iaItem}></ia-item-navigator>
```
For `<book-navigator>`:
```
const iaItem = <MetadataResponse>;
<ia-item-navigator .item=${iaItem} .itemType="bookreader">
  <div slot="theater-header"><p>foo header</p></div>
  <div slot="theater-main"><div id="BookReader"></div></div>
</ia-item-navigator>
```

## Local Demo with `web-dev-server`
```bash
yarn start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
yarn run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
yarn run lint
```

You can lint with ESLint and Prettier individually as well
```bash
yarn run lint:eslint
```
```bash
yarn run lint:prettier
```

To automatically fix many linting errors, run
```bash
yarn run format
```

You can format using ESLint and Prettier individually as well
```bash
yarn run format:eslint
```
```bash
yarn run format:prettier
```
