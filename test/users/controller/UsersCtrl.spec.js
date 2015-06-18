'use strict';

describe('StoryboardApp.Users', function() {
    var usersCtrl;
    var UserService;

    beforeEach(module('StoryboardApp.Users'));
    beforeEach(inject(function($controller) {
        UserService = {
            model: []
        };
        usersCtrl = $controller('UsersCtrl', {'UserService': UserService});
    }));

    describe('usersCtrl', function() {
        it('should have model undefined', function() {
            expect(usersCtrl.editedUser).toEqual(null);
        });

        it('should have model defined after selectUser', function() {
            // given
            var selectUser = {name: 'Marian'};

            // when
            usersCtrl.selectUser(selectUser);

            // then
            expect(usersCtrl.editedUser).toEqual(selectUser);
        });
    });
});