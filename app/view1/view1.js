'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {
        var ctrl = this;
        ctrl.minValue = 1;
        ctrl.maxValue = 10;

        ctrl.setValue = function(newValue) {
            ctrl.value = newValue;
        };

        ctrl.inRange = function() {
            return ctrl.value >= ctrl.minValue && ctrl.value <= ctrl.maxValue;
        };
    }]).filter('firstLetterUpperCase', function() {
        return function(text) {
            return text[0].toUpperCase() + text.slice(1);
        }
    }).directive('version', function() {
        return {
            restrict : 'E',
            replace:true,
            template: '<span class="version"> Wersja {{version}}</span>'
        }
    });