class NewsFeedCtrl {

    posts:IPost[];
    static $inject: string[] = ['$scope', 'PostsService'];

    constructor(private $scope, private postsService: PostsService) {
        $scope.model = this;
        this.getPosts();
    }

    getPosts() {
        this.posts = this.$scope.posts = this.postsService.getPosts();
    }

    updateStatus() {
        var description = this.$scope.status.description;
    }
}