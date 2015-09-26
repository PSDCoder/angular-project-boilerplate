'use strict';

var path = require('path');
var KarmaServer = require('karma').Server;

module.exports = function (gm, gulp, config) {
    gulp.task('test', function (done) {
        new KarmaServer({
            configFile: path.join(__dirname, '..', '..', 'test', 'karma.conf.js'),
            singleRun: true
        }, done).start();
    });
};