interface ILoginCtrl {
    login: () => void;
    signup:() =>void;
}

class LoginCtrl implements ILoginCtrl {
    
    static $inject: string[] = ['$scope'];
    constructor(private $scope, private authService:AuthService) {
        $scope.model = this;
        
    }

    login() {
        
        this.authService.login();
    }

    signup() {
        
    }
}

App.app.controller('LoginCtrl', LoginCtrl);