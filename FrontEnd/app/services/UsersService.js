var UsersService = (function () {
    function UsersService() {
    }
    UsersService.prototype.getUser = function (id) {
    };
    UsersService.$inject = [];
    return UsersService;
})();

App.app.service("UsersService", UsersService);
