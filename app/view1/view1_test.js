'use strict';

describe('myApp.view1 module', function() {
    var view1Ctrl;

    beforeEach(module('myApp.view1'));
    beforeEach(inject(function($controller) {
        view1Ctrl = $controller('View1Ctrl');
    }));

    describe('view1 controller', function() {

        it('scope.inRange', function() {
            // when
            view1Ctrl.setValue(5);

            // then
            expect(view1Ctrl.inRange()).toBeTruthy();
        });

        it('setValue sets balue of value', function() {
            // given
            var value = 5;

            // when
            view1Ctrl.setValue(value);

            // then
            expect(view1Ctrl.value).toEqual(value);
        });

    });
});