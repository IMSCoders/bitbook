var NewsFeedCtrl = (function () {
    function NewsFeedCtrl($scope, postsService, signalRFactory) {
        this.$scope = $scope;
        this.postsService = postsService;
        this.signalRFactory = signalRFactory;
        $scope.model = this;
        this.getPosts();
        this.signalRFactory.initialize(this.broadcastMessage);
    }
    NewsFeedCtrl.prototype.getPosts = function () {
        this.posts = this.$scope.posts = this.postsService.getPosts();
    };

    NewsFeedCtrl.prototype.createPost = function () {
        var description = this.$scope.post.description;
        var post = {
            description: description,
            postedBy: 'Adib'
        };

        //this.postsService.createPost(post);
        this.signalRFactory.sendRequest();
    };

    NewsFeedCtrl.prototype.likeEvent = function () {
    };

    NewsFeedCtrl.prototype.broadcastMessage = function () {
        alert('in broad cast message');
    };
    NewsFeedCtrl.$inject = ['$scope', 'PostsService', 'SignalRFactory'];
    return NewsFeedCtrl;
})();
//# sourceMappingURL=NewsFeedCtrl.js.map
