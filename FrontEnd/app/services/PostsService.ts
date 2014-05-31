/// <reference path="../references.ts" />

class PostsService {
    static $inject: string[] = ['$http'];
    constructor(private $http) {

    }

    getPosts() {
        
        this.$http.get(App.webApiUrl + 'Post/GetAllPosts').success(() => {
            alert('success');
        }).error((data, status, headers, config) => {
            alert('failure');
        });
    }


    createPost(post:IPost) {
        this.$http.post(App.webApiUrl+'Post/PostStatus', post).success(() => {
            alert('in success');
        }).error(function (data, status, headers, config) {
            alert('in error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    }
}

App.app.service("PostsService", PostsService);