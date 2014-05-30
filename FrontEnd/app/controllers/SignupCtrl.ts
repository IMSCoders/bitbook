class SignupCtrl {
    static $inject: string[] = ['$scope' , 'AuthService'];
    constructor(private $scope, private authService:AuthService) {
        $scope.model = this;
    }

    signup() {
        this.authService.signup();
    }

} 