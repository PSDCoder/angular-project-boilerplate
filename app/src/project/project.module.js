(function () {
    'use strict';

    angular.module('project', [
        //external
        'svg-icons',

        //app-modules
        'templates'
    ]);

    angular.module('project')
        .run(function (Test, SvgIcons) {
            Test.test();
            SvgIcons.loadSprite('/assets/svgs/sprite.svg');
        });
})();

