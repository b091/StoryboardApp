'use strict';

describe('myApp.view1 module', function() {
    var view1Ctrl;
    var view1UCFilter;


    beforeEach(module('myApp.view1'));
    beforeEach(inject(function($controller, $filter) {
        view1Ctrl = $controller('View1Ctrl');
        view1UCFilter = $filter('firstLetterUpperCase');
    }));

    describe('view1 controller', function() {

        it('scope.inRange', function() {
            // when
            view1Ctrl.setValue(5);

            // then
            expect(view1Ctrl.inRange()).toBeTruthy();
        });

        it('setValue sets value of value', function() {
            // given
            var value = 5;

            // when
            view1Ctrl.setValue(value);

            // then
            expect(view1Ctrl.value).toEqual(value);
        });


        it('filter should upercase first letter', function() {
            // given
            var sampleString = "ala ma kota";
            var resultSampleString = "Ala ma kota";

            // when
            var processedSampleString = view1UCFilter(sampleString);

            // then
            expect(processedSampleString).toEqual(resultSampleString);
        });

    });

    describe('view1 directive', function() {
        var element;

        beforeEach(inject(function($compile, $rootScope) {
            element = $compile('<version></version>')($rootScope);
            $rootScope.$digest();
        }));

        it('shows current app version', function() {
            console.log(element.text);
            expect(element.text()).toEqual('Wersja 12');
        });

    });
});