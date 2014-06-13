/// <reference path="../references.ts" />
var PostsService = (function () {
    function PostsService($http) {
        this.$http = $http;
    }
    PostsService.prototype.getPosts = function () {
        return this.$http.get(App.webApiUrl + 'Post/GetAllPosts');
    };

    PostsService.prototype.createPost = function (post) {
        this.$http.post(App.webApiUrl + 'Post/PostStatus', post).success(function () {
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
