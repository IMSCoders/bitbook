var ProfileInfoCtrl = (function () {
    function ProfileInfoCtrl($scope, user) {
        this.$scope = $scope;
        this.user = user;
        $scope.user = user;
    }
    ProfileInfoCtrl.$inject = ['$scope', 'user'];
    return ProfileInfoCtrl;
})();

App.app.controller("ProfileInfoCtrl", ProfileInfoCtrl);
