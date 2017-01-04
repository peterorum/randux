# randux
Boilerplate react+redux setup with immutable, webpack, es6/babel, sass, postcss, eslint, jscs, sass-lint, bower, mocha, chai, express.

## features
* development & production builds using webpack
* react hot module reload with webpack dev server
* normalize.css
* using animate.css with react css transformations
* mocha+chai tests for components, actions & reducers
* express server for use on production server
* image optimization with imagemin
* svg optimization with svgo

## installation

1. npm install
2. npm run start
3. view on localhost:8080

## tests

In a separate terminal, run `npm test`. This runs the mocha+chai tests, and keeps it running watching files.

## notes

`npm run images` must be run manually whenever a new image or svg is added under the design folder. This optimizes & copies the files to the source images folder.

To use the [sentry.io](https://sentry.io) error logging, you will need to get account keys from there & add them to your environment. eg in ~/.bash_profile

  export sentryKey="abcd...."
  export sentryApp="123456"


## build

Build & deployment scripts are for osx, and assume the project is under ~/Projects/randux.

Run the `build` script

This wipes the dist folder, rebuilds the app & assembles everything in the appropriate folders under dist folder. Run a server on the dist folder to test. e.g. http-server.

## deployment

Run the `deploy` script.

This uses rsync to upload the dist folder to a server specified in your .ssh config.

