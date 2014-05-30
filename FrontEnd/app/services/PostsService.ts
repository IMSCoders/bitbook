
class PostsService {
    static $inject: string[] = [];
    constructor() {

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

    }
}

App.app.service("PostsService", PostsService);