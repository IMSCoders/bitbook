class NewsFeedCtrl {

    posts:IPost[];
    static $inject: string[] = ['$scope', 'PostsService', 'SignalRFactory','CommentService', 'JoinGroupFactory'];
    newsfeed = 'asf';
    constructor(
        private $scope, private postsService: PostsService, private signalRFactory: SignalRFactory,
        private commentService: CommentService, private joinGroupFactory: JoinGroupFactory) {
        $scope.model = this;
        this.getPosts();
        //this.signalRFactory.initialize(this.broadcastMessage);
        //this.joinGroupFactory.initialize();
        
    }

    getPosts() {
        this.postsService.getPosts();
//        ajax.done(() => {
//            alert('posts received');
//        }).error(() => {
//            alert('posts error');
//        });
    }

    createPost() {
        var description = this.$scope.post.description;
        var post :IPost = {
            description: description,
            postedBy:'5388ea3fcd8c372014f4593e'
        }

        this.postsService.createPost(post);
        //this.signalRFactory.sendRequest();
    }

    likeEvent() {
            
    }

    broadcastMessage() {
        alert('in broad cast message');
    }
   
    addComment() {
        alert('add comment');
        this.commentService.createComment();
    }
}