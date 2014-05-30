class AuthService {
    static $inject: string[] = ['$http'];
    constructor(private $http) {
        
    }

    login(user:IUserLogin) {
        
    }

    signup(user: IUser) {
        this.$http.post(App.webApiURLForAccountRegister, user).success();
    }
} 

App.app.service("AuthService", AuthService)