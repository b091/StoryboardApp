'use strict';

angular.module('StoryboardApp.Common').service('StoryService', ['EndpointService', '$http', function(EndpointService, $http) {
    var service = this,
        moduleName = 'stories';

    service.model = [];

    service.create = function(storyId) {
        return service.handleResponse(
            $http.post(EndpointService.getUrlForId(moduleName, storyId), story),
            'create'
        );
    };

    service.getAll = function() {
        return service.handleResponse(
            $http.get(EndpointService.getUrl(moduleName)),
            'getAll'
        );
    };

    service.getById = function(storyId) {
        return service.handleResponse(
            $http.get(EndpointService.getUrlForId(moduleName, storyId)),
            'getById'
        );
    };

    service.update = function(story) {
        return service.handleResponse(
            $http.put(EndpointService.getUrlForId(moduleName, story.id), story),
            'update'
        );
    };

    service.delete = function(storyId) {
        return service.handleResponse(
            $http.delete(EndpointService.getUrlForId(moduleName, storyId), story),
            'delete'
        );
    };

    service.handleResponse = function(promise, callerMethodName) {
        return promise.success(function(data) {
            service.model.length = 0;
            Array.prototype.push.apply(service.model, data);
        }).error(function(reason) {
            console.log('StoryboardApp.Common.StoryService.' + callerMethodName, 'ERROR', reason);
        });
    };

}]);