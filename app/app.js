'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'ngAnimate',
    'StoryboardApp.Storyboard',
    'StoryboardApp.Common'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
