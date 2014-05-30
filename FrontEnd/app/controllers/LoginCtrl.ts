
class LoginCtrl {
    
    static $inject: string[] = ['$scope' , 'AuthService'];
    constructor(private $scope, private authService:AuthService) {
        $scope.model = this;
        
    }

    login() {
        
        this.authService.login();
    }

   
}

App.app.controller('LoginCtrl', LoginCtrl);