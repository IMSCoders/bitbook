var SignupCtrl = (function () {
    function SignupCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        $scope.model = this;
    }
    SignupCtrl.prototype.signup = function () {
        this.authService.signup();
    };
    SignupCtrl.$inject = ['$scope', 'AuthService'];
    return SignupCtrl;
})();
//# sourceMappingURL=SignupCtrl.js.map
