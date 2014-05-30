class NewsFeedCtrl {

    posts:IPost[];
    static $inject: string[] = ['$scope', 'PostsService', 'SignalRFactory'];

    constructor(private $scope, private postsService: PostsService, private signalRFactory:SignalRFactory) {
        $scope.model = this;
        this.getPosts();
        this.signalRFactory.initialize(this.broadcastMessage);
    }

    getPosts() {
        this.posts = this.$scope.posts = this.postsService.getPosts();
    }

    createPost() {
        var description = this.$scope.post.description;
        var post :IPost = {
            description: description,
            postedBy:'Adib'
        }
        //this.postsService.createPost(post);
        this.signalRFactory.sendRequest();
    }

    likeEvent() {
            
    }

    broadcastMessage() {
        alert('in broad cast message');
    }
   
}