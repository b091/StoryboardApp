'use strict';

angular.module('StoryboardApp.Storyboard')
    .directive('detailsForm', function() {
        return {
            restrict: 'A',
            templateUrl: 'storyboard/tpl/detailsForm.html',
            scope: {
                storyboard: '='
            }
        }
    });