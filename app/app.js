'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'ngAnimate',
    'ngMessages',
    'StoryboardApp.Storyboard',
    'StoryboardApp.Common',
    'StoryboardApp.Users'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
