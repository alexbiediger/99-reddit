# 99 Reddit clone

This is a short coding challenge aiming to clone a small subset of reddit site and features.

## Demo

https://reddit-99.herokuapp.com/ 

It will take a few seconds to load initially, it shuts down then cold start when not used in a while.

## Quick start

1. Clone this repo
2. Move to the appropriate directory: `cd 99-reddit`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:3000`.

### Tests

1. Run `npm run test`
2. Open `coverage/lcov-report/index.html` in your favorite browser

### Linting

1. Run `npm run lint`

## Feature list

- List post page
- Post page
- Sort (hot/new/controversial)
- Infinite scroll
- View switching
- Look alike design

## TODO list

- Up/downvotes

## Maybe do list

- Isomorphism

## Won't do list (out of scope)

- Account handling
- Search
- Subreddit selection

## Misc

### How to debug tests

1. Drop a `debugger` statement in the code to debug
2. Open chrome at url `chrome://inspect`
3. Run `node --inspect-brk ./node_modules/jest-cli/bin/jest.js --runInBand app/components/Post/tests/index.test.js`
