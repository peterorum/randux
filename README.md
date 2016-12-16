# randux
Boilerplate react+redux setup with es6/babel, webpack, sass, postcss, eslint, jscs, sass-lint, bower, mocha, chai, express.

## features
* image optimization with imagemin
* svg optimization with svgo
* react hot module reload
* development & production builds using webpack
* normalize.css
* using animate.css with react css transformations
* tests for components, actions & reducers
* express server for use on production server

## installation

1. npm install
2. npm run start

## tests

In a separate terminal, run `npm test`. This runs the mocha+chai tests, and keeps it running watching files.

## note

`npm run images` must be run manually whenever a new image or svg is added under the design folder. This optimizes & copies the files to the source images folder.

## build

Build & deployment scripts are for osx.

Run the `build` script

This wipes the dist folder, rebuilds the app & assembles everything in the appropriate folders under dist folder. Run a server on the dist folder to test. e.g. http-server.

## deployment

Run the `deploy` script.

This uses rsync to upload the dist folder to a server specified in your .ssh config.

