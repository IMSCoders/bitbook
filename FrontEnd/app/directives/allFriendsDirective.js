var AllFriendsDirective = (function () {
    function AllFriendsDirective() {
    }
    AllFriendsDirective.friends = function () {
        var directive = {};

        directive.scope = { data: '=' };
        directive.templateUrl = 'app/directives/all-friends.html';
        directive.controller = FriendsDirectiveCtrl;
        return directive;
    };
    AllFriendsDirective.$inject = [];
    return AllFriendsDirective;
})();
App.app.directive("allFriendsDirective", function () {
    return AllFriendsDirective.friends();
});
