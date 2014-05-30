

class LoginCtrl {

    static $inject: string[] = ['$scope', 'AuthService'];
    constructor(private $scope, private authService: AuthService) {
        $scope.model = this;

    }

    login() {
        var username = this.$scope.user.username;
        var password = this.$scope.user.password;
        var user: IUserLogin = {
            name: username,
            password: password
        };
        this.authService.login(user);
    }
}

App.app.controller('LoginCtrl', LoginCtrl);