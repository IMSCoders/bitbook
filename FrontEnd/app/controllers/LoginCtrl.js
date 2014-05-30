var LoginCtrl = (function () {
    function LoginCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        $scope.model = this;
    }
    LoginCtrl.prototype.login = function () {
        this.authService.login();
    };

    LoginCtrl.prototype.signup = function () {
    };
    LoginCtrl.$inject = ['$scope'];
    return LoginCtrl;
})();

App.app.controller('LoginCtrl', LoginCtrl);
//# sourceMappingURL=LoginCtrl.js.map
