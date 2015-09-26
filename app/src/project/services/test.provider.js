(function () {
    'use strict';

    angular
        .module('project')
        .provider('Test', Test);

    function Test() {
        this.$get = TestFactory;

        function TestFactory() {
            return {
                test: function () {
                    return 'test';
                },
                throwMethod: function () {
                    throw new Error('throwMethod');
                }
            };
        }
    }
})();
