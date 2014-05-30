var SignupCtrl = (function () {
    function SignupCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        $scope.model = this;
    }
    SignupCtrl.prototype.signup = function () {
        var username = this.$scope.newuser.username;
        var password = this.$scope.newuser.password;
        var email = this.$scope.newuser.email;

        var newuser = {
            name: username,
            password: password,
            email: email
        };
        this.authService.signup(newuser);
    };
    SignupCtrl.$inject = ['$scope', 'AuthService'];
    return SignupCtrl;
})();
//# sourceMappingURL=SignupCtrl.js.map
