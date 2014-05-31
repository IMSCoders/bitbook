var PostsService = (function () {
    function PostsService($http) {
        this.$http = $http;
    }
    PostsService.prototype.getPosts = function () {
        var user = [];

        user[0] = {
            description: "This is description",
            id: 1,
            postedTime: 'time',
            postedBy: "Adib"
        };
        user[1] = {
            description: "This is another description",
            id: 2,
            postedBy: "Amit",
            postedTime: 'time'
        };

        return user;
    };

    PostsService.prototype.createPost = function (post) {
        console.log(post);
        this.$http.post(App.webApiURLForPostStatus, post).success(function () {
            alert('in success');
        }).error(function (data, status, headers, config) {
            alert('in error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    PostsService.$inject = ['$http'];
    return PostsService;
})();

App.app.service("PostsService", PostsService);
//# sourceMappingURL=PostsService.js.map
