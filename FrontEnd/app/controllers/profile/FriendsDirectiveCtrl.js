var FriendsDirectiveCtrl = (function () {
    function FriendsDirectiveCtrl($scope, friendsService) {
        this.$scope = $scope;
        this.friendsService = friendsService;
        this.friendsDirectiveField = 'fdf';
        $scope.model = this;
    }
    FriendsDirectiveCtrl.prototype.unfriend = function () {
        this.friendsService.unfriend();
    };

    FriendsDirectiveCtrl.prototype.hideFromFeed = function () {
        this.friendsService.hideFromFeed();
    };
    FriendsDirectiveCtrl.$inject = ['$scope', 'FriendsService'];
    return FriendsDirectiveCtrl;
})();

App.app.controller("FriendsDirectiveCtrl", FriendsDirectiveCtrl);
