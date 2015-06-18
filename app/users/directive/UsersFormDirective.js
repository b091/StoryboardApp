'use strict';

angular.module('StoryboardApp.Users')
    .directive('usersForm', function() {
        return {
            restrict: 'A',
            templateUrl: 'users/tpl/usersForm.html',
            scope: {
                users: '='
            }
        }
    });