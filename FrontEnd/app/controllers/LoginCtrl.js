var LoginCtrl = (function () {
    function LoginCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        $scope.model = this;
    }
    LoginCtrl.prototype.login = function () {
        this.authService.login();
    };
    LoginCtrl.$inject = ['$scope', 'AuthService'];
    return LoginCtrl;
})();

App.app.controller('LoginCtrl', LoginCtrl);
//# sourceMappingURL=LoginCtrl.js.map
