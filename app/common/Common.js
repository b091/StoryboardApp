'use strict';

angular.module('StoryboardApp.Common', ['filearts.dragDrop'])

    .constant('STORY_STATUSES', [
        {name: 'Todo'},
        {name: 'In progress'},
        {name: 'Code review'},
        {name: 'QA review'},
        {name: 'Verified'}
    ])
    .value('STORY_TYPES', [
        {name: 'Feature'},
        {name: 'Enhancement'},
        {name: 'Bug'},
        {name: 'Spike'},
        {name: 'Task'}
    ]);
