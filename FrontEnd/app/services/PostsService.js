var PostsService = (function () {
    function PostsService() {
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
    PostsService.$inject = [];
    return PostsService;
})();

App.app.service("PostsService", PostsService);
//# sourceMappingURL=PostsService.js.map
