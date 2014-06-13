var ShowAllPostsDirective = (function () {
    function ShowAllPostsDirective() {
    }
    ShowAllPostsDirective.directive = function () {
        var directive = {};

        directive.scope = { data: '=' };
        directive.templateUrl = 'app/directives/all-posts.html';

        //directive.template = 'this is directive';
        return directive;
    };
    ShowAllPostsDirective.$inject = [];
    return ShowAllPostsDirective;
})();

App.app.directive("showAllPostsDirective", function () {
    return ShowAllPostsDirective.directive();
});
//# sourceMappingURL=showAllPostsDirective.js.map
