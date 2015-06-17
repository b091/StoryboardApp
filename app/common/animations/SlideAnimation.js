'use strict';

angular.module('StoryboardApp.Common')
    .animation('.slide-animation', function() {
        return {
            addClass: function(element, className, callback) {
                if (className === 'show-details') {
                    console.log('addClass');
                }
                callback();
            },
            removeClass: function(element, className, callback) {
                if (className === 'show-details') {
                    console.log('removeClass');
                }
                callback();
            }
        }
    });
