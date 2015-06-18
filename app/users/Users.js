'use strict';

angular.module('StoryboardApp.Users', ['ngRoute'])
    .config(['$routeProvider', '$httpProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/tpl/users.html',
            controller: 'UsersCtrl',
            controllerAs: 'users'
        });
    }]);
