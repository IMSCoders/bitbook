class AuthService {
    static $inject: string[] = ['$http'];
    constructor(private $http) {
        
    }

    login(user:IUserLogin) {
        
    }

    signup(user: IUser) {
        this.$http.post(App.webApiURL, user).success();
    }
} 

App.app.service("AuthService", AuthService)