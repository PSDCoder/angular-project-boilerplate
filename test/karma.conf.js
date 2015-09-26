var path = require('path');
var gulpConfig = require('../gulp/config');

module.exports = function (config) {
    'use strict';

    var rootDir = path.resolve(__dirname, '..');
    var appDir = path.join(rootDir, 'app');

    var files = [
        path.join(appDir, 'bower_components/angular/angular.js'),
        path.join(appDir, 'bower_components/angular-mocks/angular-mocks.js'),
        path.join(appDir, 'src', '**', '**/*.module.js'),
        path.join(appDir, 'src', '**', '*.!(module).js'),
        path.join(rootDir, 'test', 'unit', '**', '*.spec.js')
    ];

    config.set({
        basePath: '',
        autoWatch: false,
        frameworks: ['mocha', 'sinon-chai'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-sinon-chai',
            'karma-spec-reporter'
        ],
        files: files,
        reporters: ['spec']
    });
};