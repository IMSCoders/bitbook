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

    NewsFeedCtrl.prototype.createPost = function () {
        alert('in create');
        var description = this.$scope.post.description;
        var post = {
            description: description,
            postedBy: 'Adib'
        };
        alert(' in create post');
        this.postsService.createPost(post);
    };
    NewsFeedCtrl.$inject = ['$scope', 'PostsService'];
    return NewsFeedCtrl;
})();
//# sourceMappingURL=NewsFeedCtrl.js.map
