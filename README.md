# typescript-library-template

## Install

Clone the repository:

```
git clone --depth 1 git@github.com:alioguzhan/typescript-library-template.git
```

Install the deps:

```bash
yarn install
```

> You can check if there are any outdated package with [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) tool.

## Development

> NOTE: There are a couple of places that you need to change before start. Open `package.json` file replace any `change__here` with your values.

Write your library code to `index.ts` file and run:

```
yarn start
```

This will watch your changes and reloads the server.

### Commit Messages

This setup expects you to follow conventional-commits format. There is a husky command runs before every commit for validation.

To learn more about conventional commits see [its website](https://www.conventionalcommits.org/en/v1.0.0/).

You can remove that section from `package.json` also remove the related packages:

```
yarn remove -D husky @commitlint/cli
```

## Build

Run:

```
yarn build
```

This will create your compiled files under `./dist` folder.

## Test

Jest is configured and ready to use. Just run:

```
yarn test
```
