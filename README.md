# Angular template with configured gulp flow

### Includes:

* Generating svg sprite with fallback for old browsers. Includes angular directive for simple usage
* Generating raster sprite. Includes scss sprite functions
* Scss compiling
* Building production version of app: prepare and minify all assets, add hash revision to it.
* Has dev server with watchers
* Includes configured testing framework: Karma with mocha, chai and sinon.
* Has configuration for jscs, jshint, htmlhint.

### Gulp tasks:

* `gulp build [--env=prod]` - build project in folder specified by gulp config and passed environment.
* `gulp serve [--env=prod] [--watch]` - Build and run server. If specified `--watch` arg then watchers will be set up. (Only for dev environment).