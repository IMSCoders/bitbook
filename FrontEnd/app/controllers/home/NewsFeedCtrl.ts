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

    createPost() {
        alert('in create');
        var description = this.$scope.post.description;
        var post :IPost = {
            description: description,
            postedBy:'Adib'
        }
        alert(' in create post');
        this.postsService.createPost(post);
    }
}