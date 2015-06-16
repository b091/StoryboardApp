'use strict';

angular.module('StoryboardApp.Storyboard')
    .controller('StoryboardCtrl', function() {
        var ctrl = this;

        ctrl.stories = [
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

        ctrl.statuses = [
            {name: 'Todo'},
            {name: 'In progress'},
            {name: 'Code review'},
            {name: 'QA review'},
            {name: 'Verified'}
        ];

        ctrl.selectedStory = null;
        ctrl.editedStory = null;

        ctrl.selectStory = function(story) {
            ctrl.selectedStory = story;
            ctrl.editedStory = angular.copy(story);
        };

        ctrl.deleteStory = function(story) {
            ctrl.stories.splice(ctrl.stories.indexOf(story), 1);
            ctrl.resetForm();
        };

        ctrl.resetForm = function() {
            ctrl.editedStory = null;
        };

        ctrl.updateStory = function() {
            for (var i = 0; ctrl.stories.length >= i; i++) {
                if (ctrl.stories[i].id === ctrl.editedStory.id) {
                    ctrl.stories[i] = ctrl.editedStory;
                    break;
                }
            }
            ctrl.resetForm();
        };

        ctrl.createStory = function() {
            if (ctrl.editedStory) {
                ctrl.stories.push(ctrl.editedStory);
                ctrl.resetForm();
            }
        };
    });
