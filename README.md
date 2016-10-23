# randux
Basic react+redux setup with es6/babel, webpack, gulp, sass, eslint, jscs, sass-lint, bower.

React & webpack setup based on Wes Bos' [Learn Redux](https://learnredux.com).

## Installation
1. Clone the project.
2. In the project folder, run `npm install` and `bower install`.
3. Run `gulp build` to create the project output files (transpiling sass, es6)
6. Run `gulp watch` to monitor for changes.
5. The watch task starts browsersync on localhost:3000.
6. The dev build tasks write their output to a new dev folder within the project.
4. To create the minified distributable code in the `dist` folder, run `gulp build`.
6. Also run `gulp build` whenever you change the library components or images, as they are not updated by the regular `watch` task.
