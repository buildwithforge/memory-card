<p align="center">
  <img src="https://github.com/buildwithforge/memory-card/blob/main/public/screenshot.png" alt="Memory Card" width="400">
</p>

# Memory Card

[![build](https://github.com/buildwithforge/memory-card/actions/workflows/build.yml/badge.svg)](https://github.com/buildwithforge/memory-card/actions/workflows/build.yml)

This is a simple [memory card game](https://github.com/phaserjs/create-game/tree/main/scaffolding/demo/memory-card-game). The goal is to match all the cards in the fewest number of moves.

Click on a card to reveal its symbol. Click on a second card to reveal its symbol. If the symbols match, the cards will remain face up. If the symbols do not match, the cards will be hidden again. Continue until all cards are matched.

[Play the game.](https://buildwithforge.github.io/memory-card/)

## Install

Clone the repository:

```sh
git clone https://github.com/buildwithforge/memory-card.git
cd memory-card
```

Install the dependencies:

```sh
npm install
```

Update the environment variables:

```sh
cp .env .env.local
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and packages it into a Zip file in the `dist` folder.

Your game can be uploaded to your server, [Itch.io](https://itch.io/), [Newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)
