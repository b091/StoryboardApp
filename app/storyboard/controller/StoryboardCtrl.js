'use strict';

angular.module('StoryboardApp.Storyboard')
    .controller('StoryboardCtrl', function() {
        var ctrl = this;

        ctrl.stories = [
            {
                title: 'First story',
                description: 'Some description',
                status: 'Todo',
                type: 'Spike'
            },
            {
                title: 'Second one',
                description: 'Some long description ......... .....',
                status: 'In Progress',
                type: 'Enchantment'
            }
        ];

        ctrl.statuses = [
            {name: 'Todo'},
            {name: 'In progress'},
            {name: 'Code review'},
            {name: 'QA review'},
            {name: 'Verified'}
        ];
    });
