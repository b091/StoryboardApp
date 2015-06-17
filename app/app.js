'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'ngAnimate',
    'ngMessages',
    'StoryboardApp.Storyboard',
    'StoryboardApp.Common'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
