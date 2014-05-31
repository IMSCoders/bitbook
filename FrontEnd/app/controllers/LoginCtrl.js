var LoginCtrl = (function () {
    function LoginCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        $scope.model = this;
    }
    LoginCtrl.prototype.login = function () {
        var username = this.$scope.user.username;
        var password = this.$scope.user.password;
        var user = {
            name: username,
            password: password
        };
        this.authService.login(user);
    };
    LoginCtrl.$inject = ['$scope', 'AuthService'];
    return LoginCtrl;
})();

App.app.controller('LoginCtrl', LoginCtrl);
