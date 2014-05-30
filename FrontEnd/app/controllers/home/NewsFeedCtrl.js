var NewsFeedCtrl = (function () {
    function NewsFeedCtrl($scope, postsService) {
        this.$scope = $scope;
        this.postsService = postsService;
        $scope.model = this;
        this.getPosts();
    }
    NewsFeedCtrl.prototype.getPosts = function () {
        this.posts = this.$scope.posts = this.postsService.getPosts();
    };

    NewsFeedCtrl.prototype.updateStatus = function () {
        var description = this.$scope.status.description;
    };
    NewsFeedCtrl.$inject = ['$scope', 'PostsService'];
    return NewsFeedCtrl;
})();
//# sourceMappingURL=NewsFeedCtrl.js.map
