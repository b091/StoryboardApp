'use strict';

angular.module('StoryboardApp.Common').service('StoryService', function() {
    var service = this;
    service.stories = [
        {
            id: 1,
            title: 'If you shine or fly with a shining chaos, surrender invents you.',
            description: 'Protons walk from peaces like carnivorous ships. When the lotus of love develops peace of the doer, the reincarnation will know sinner.',
            status: 'Todo',
            type: 'Spike',
            assignee: 1,
            criteria: 'AC: adsd asd asdasd',
            reporter: 2
        },
        {
            id: 2,
            title: 'Why does the ship tremble?',
            description: 'Sun of a fine malaria, fire the adventure! Calm voyages lead to the peace. Jolly roger, yo-ho-ho.',
            status: 'In Progress',
            type: 'Bug',
            assignee: 1,
            criteria: 'AC: adsd asd asdasd',
            reporter: 2
        },
        {
            id: 3,
            title: 'For an iced ripe platter, add some vinegar and corn syrup.',
            description: 'Sun of a fine malaria, fire the adventure! Calm voyages lead to the peace. Jolly roger, yo-ho-ho.',
            status: 'In Progress',
            type: 'Enhancement',
            assignee: 1,
            criteria: 'AC: adsd asd asdasd',
            reporter: 2
        }
    ];

    service.getStories = function() {
        return service.stories;
    };
});