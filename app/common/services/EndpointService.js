'use strict';

angular.module('StoryboardApp.Common').service('EndpointService', function() {
    var service = this,
        baseUri = 'http://localhost:8000/api/';

    service.getUrl = function(moduleName) {
        return baseUri + moduleName + '.json';
    };

    service.getUrlForId = function(moduleName, id) {
        return service.getUrl(moduleName) + '/' + id;
    };
});