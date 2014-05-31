var HomeHeaderCtrl = (function () {
    function HomeHeaderCtrl($scope, searchService) {
        this.$scope = $scope;
        this.searchService = searchService;
        this.headervar = 'asd';
    }
    HomeHeaderCtrl.prototype.searchUser = function () {
        alert('user');
        this.searchService.searchPeople(this.$scope.name);
    };
    HomeHeaderCtrl.$inject = ['$scope', 'SearchServices'];
    return HomeHeaderCtrl;
})();

App.app.controller("HomeHeaderCtrl", HomeHeaderCtrl);
//# sourceMappingURL=HomeHeaderCtrl.js.map
