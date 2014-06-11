var HomeHeaderCtrl = (function () {
    function HomeHeaderCtrl($scope) {
        this.$scope = $scope;
        this.messages = ['msg a', 'msg b', 'msg c', 'msg  e'];
        this.friendrequests = ['friend a', 'friend b', 'friend d'];
        this.notifications = ['noti a', 'noti b', 'noti c'];
        $scope.model = this;
    }
    HomeHeaderCtrl.$inject = ['$scope'];
    return HomeHeaderCtrl;
})();

App.app.controller("HomeHeaderCtrl", HomeHeaderCtrl);
//# sourceMappingURL=HomeHeaderCtrl.js.map
