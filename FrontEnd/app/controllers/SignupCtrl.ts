class SignupCtrl {
    static $inject: string[] = ['$scope' , 'AuthService'];
    constructor(private $scope, private authService:AuthService) {
        $scope.model = this;
    }

    signup() {
        var username = this.$scope.newuser.username;
        var password = this.$scope.newuser.password;
        var email = this.$scope.newuser.email;

        var newuser: IUser = {
            name: username,
            password: password,
            email: email

        };
        this.authService.signup(newuser);        
    }

} 