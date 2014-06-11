var HeaderDropdownDirectives = (function () {
    function HeaderDropdownDirectives() {
    }
    HeaderDropdownDirectives.messagesDropdownDirective = function () {
        var directive = {};

        directive.scope = { messages: '=' };
        directive.templateUrl = this.templatePath + 'messages/messagesDropdownTemplate.html';

        return directive;
    };

    HeaderDropdownDirectives.friendRequestsDropdownDirective = function () {
        var directive = {};

        directive.scope = { friendrequests: '=' };
        directive.templateUrl = this.templatePath + 'friendRequests/friendRequestsDropdownTemplate.html';

        return directive;
    };

    HeaderDropdownDirectives.notificationsDropdownDirective = function () {
        var directive = {};

        directive.scope = { notifications: '=' };
        directive.templateUrl = this.templatePath + 'notifications/notificationsDropdownTemplate.html';

        return directive;
    };
    HeaderDropdownDirectives.templatePath = 'app/directives/header/';
    return HeaderDropdownDirectives;
})();

App.app.directive('headerMessagesDropdownDirective', function () {
    return HeaderDropdownDirectives.messagesDropdownDirective();
});
App.app.directive('headerFriendrequestsDropdownDirective', function () {
    return HeaderDropdownDirectives.friendRequestsDropdownDirective();
});
App.app.directive('headerNotificationsDropdownDirective', function () {
    return HeaderDropdownDirectives.notificationsDropdownDirective();
});
//# sourceMappingURL=headerDropdownDirectives.js.map
