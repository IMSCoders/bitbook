﻿var NewsFeedCtrl = (function () {
    function NewsFeedCtrl($scope, postsService, signalRFactory, commentService, joinGroupFactory) {
        this.$scope = $scope;
        this.postsService = postsService;
        this.signalRFactory = signalRFactory;
        this.commentService = commentService;
        this.joinGroupFactory = joinGroupFactory;
        this.newsfeed = 'asf';
        $scope.model = this;
        //this.getPosts();
        //this.signalRFactory.initialize(this.broadcastMessage);
        //this.joinGroupFactory.initialize();
    }
    NewsFeedCtrl.prototype.getPosts = function () {
        var _this = this;
        var received = this.postsService.getPosts();
        received.success(function (data) {
            _this.posts = data;
        }).error(function (data, status, headers, config) {
            alert('failure');
        });
        //        ajax.done(() => {
        //            alert('posts received');
        //        }).error(() => {
        //            alert('posts error');
        //        });
    };

    NewsFeedCtrl.prototype.createPost = function () {
        var description = this.$scope.post.description;
        var post = {
            description: description,
            postedBy: '5388ea3fcd8c372014f4593e'
        };

        this.postsService.createPost(post);
        //this.signalRFactory.sendRequest();
    };

    NewsFeedCtrl.prototype.likeEvent = function () {
    };

    NewsFeedCtrl.prototype.broadcastMessage = function () {
        alert('in broad cast message');
    };

    NewsFeedCtrl.prototype.addComment = function () {
        alert('add comment');
        this.commentService.createComment();
    };
    NewsFeedCtrl.$inject = ['$scope', 'PostsService', 'SignalRFactory', 'CommentService', 'JoinGroupFactory'];
    return NewsFeedCtrl;
})();
//# sourceMappingURL=NewsFeedCtrl.js.map
