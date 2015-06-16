'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'StoryboardApp.Storyboard',
    'StoryboardApp.Common'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
