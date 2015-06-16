'use strict';

angular.module('StoryboardApp.Storyboard')
    .controller('StoryboardCtrl', ['StoryService', function(StoryService) {
        var ctrl = this;

        ctrl.stories = StoryService.getStories();

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
            ctrl.detailsForm.$setPristine();
            ctrl.detailsForm.$setUntouched();
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
    }]);
