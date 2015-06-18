'use strict';

angular.module('StoryboardApp.Users')
    .service('UserService', ['EndpointService', '$http', function(EndpointService, $http) {
        var service = this,
            moduleName = 'users';

        service.model = [
            {
                id: 1,
                firstName: 'Gutless',
                lastName: 'Ecce',
                email: 'gutless@ecce.com'
            },
            {
                id: 2,
                firstName: 'Valebats',
                lastName: 'Caesium',
                email: 'valebats@caesium.com'
            }
        ];


    }]);