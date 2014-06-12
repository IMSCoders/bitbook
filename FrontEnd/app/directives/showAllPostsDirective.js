var ShowAllPostsDirective = (function () {
    function ShowAllPostsDirective() {
    }
    ShowAllPostsDirective.directive = function () {
        var directive = {};

        directive.scope = { data: '=' };
        directive.templateUrl = 'app/directives/all-posts.html';

        return directive;
    };
    ShowAllPostsDirective.$inject = [];
    return ShowAllPostsDirective;
})();

App.app.directive("showAllPostsDirective", function () {
    return ShowAllPostsDirective.directive();
});
