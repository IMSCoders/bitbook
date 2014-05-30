var AuthService = (function () {
    function AuthService($http) {
        this.$http = $http;
    }
    AuthService.prototype.login = function (user) {
    };

    AuthService.prototype.signup = function (user) {
        this.$http.post(App.webApiURLForAccountRegister, user).success();
    };
    AuthService.$inject = ['$http'];
    return AuthService;
})();

App.app.service("AuthService", AuthService);
//# sourceMappingURL=AuthService.js.map
