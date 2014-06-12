var SignupCtrl = (function () {
    function SignupCtrl($scope, authService) {
        this.$scope = $scope;
        this.authService = authService;
        this.months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.day = [];
        this.year = [];
        $scope.model = this;
        var i;

        for (i = 1; i <= 31; i++)
            this.day.push(i);

        for (i = new Date().getFullYear(); i > 1904; i--) {
            this.year.push(i);
        }
    }
    SignupCtrl.prototype.signup = function () {
        var username = this.$scope.newuser.username;
        var password = this.$scope.newuser.password;
        var email = this.$scope.newuser.email;

        var newuser = {
            UserName: username,
            Email: email,
            Password: password,
            ConfirmPassword: password
        };
        this.authService.signup(newuser);
    };
    SignupCtrl.$inject = ['$scope', 'AuthService'];
    return SignupCtrl;
})();
