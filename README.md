Todo:

- split form and results to separate components,
- create new service to handle logic behind calculating quote and communications between the two components
- touch up styling
- swap out mocha and use jasmine for unit tests
- create a API to handle quote calculation service rather than client side. 
- deploy to heroku or digital ocean

 
### Tasks
Here's a list of available tasks:
* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `npm run watch`
  * alias of `serve`
* `npm start` (which is the default task that runs when typing `gulp` without providing an argument)
  * runs `serve`.
* `npm run component`
  * scaffolds a new Angular component. [Read below](#generating-components) for usage details.
  
### Testing
To run the tests, run `npm test`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file(s) you want.
`Mocha` is the testing suite and `Chai` is the assertion library. If you would like to change this, see `karma.conf.js`.

#
