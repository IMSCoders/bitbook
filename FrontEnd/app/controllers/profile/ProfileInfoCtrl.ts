class ProfileInfoCtrl {
    static $inject: string[] = ['$scope','user'];
    constructor(private $scope, private user) {
        $scope.user = user;
    }
}

App.app.controller("ProfileInfoCtrl", ProfileInfoCtrl);