'use strict';

angular.module('StoryboardApp.Storyboard')
    .directive('story', function($compile) {
        return {
            restrict: 'A',
            templateUrl: 'storyboard/tpl/story.html'
        }
    });