'use strict';

angular.module('StoryboardApp.Common').service('StoryService', function() {
    var service = this;
    service.stories = [
        {
            id: 1,
            title: 'First story',
            description: 'Some description',
            status: 'Todo',
            type: 'Spike',
            assignee: 1,
            criteria: 'AC: adsd asd asdasd',
            reporter: 2
        },
        {
            id: 2,
            title: 'Second one',
            description: 'Some long description ......... .....',
            status: 'In Progress',
            type: 'Enchantment',
            assignee: 1,
            criteria: 'AC: adsd asd asdasd',
            reporter: 2
        }
    ];

    service.getStories = function() {
        return service.stories;
    };
});