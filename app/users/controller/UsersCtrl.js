'use strict';

angular.module('StoryboardApp.Users')
    .controller('UsersCtrl', ['UserService', function(UserService) {
        var ctrl = this;

        ctrl.users = UserService.model;
        ctrl.editedUser = null;

        ctrl.asdFunct = function() {
        };

        ctrl.selectUser = function(user) {

            ctrl.editedUser = user;
        }

    }]);
