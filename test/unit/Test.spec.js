/* globals describe, it, beforeEach, module, inject, expect  */
'use strict';

describe('TestProvider', function () {
    var TestProvider;

    beforeEach(module('project'));
    beforeEach(inject(function ($injector) {
        TestProvider = $injector.get('Test');
    }));

    it('Should be a object', function () {
        expect(TestProvider).to.be.a('object');
    });

    describe('#test method', function () {
        it('Should return correct value', function () {
            expect(TestProvider.test()).to.equal('test');
        });
    });

    describe('#throwMethod method', function () {
        it('Should throw error with correct error message', function () {
            expect(TestProvider.throwMethod).to.throw('throwMethod');
        });
    });
});