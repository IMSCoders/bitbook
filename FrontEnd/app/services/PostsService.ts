
class PostsService {
    static $inject: string[] = ['$http'];
    constructor(private $http) {

    }

    getPosts(): IPost[] {
        var user: IPost[] = [];

        user[0] = {
            description: "This is description",
            id: 1,
            postedTime: 'time',
            postedBy: "Adib"
        }
        user[1] = {
            description: "This is another description",
            id: 2,
            postedBy: "Amit",
            postedTime: 'time'
        }

        return user;
    }

    createPost(post:IPost) {
        console.log(post);
        this.$http.post(App.webApiURLForPostStatus, post).success().error(function (data, status, headers, config) {

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    }
}

App.app.service("PostsService", PostsService);