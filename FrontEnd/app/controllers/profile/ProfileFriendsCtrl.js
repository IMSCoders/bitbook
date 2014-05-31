var ProfileFriendsCtrl = (function () {
    function ProfileFriendsCtrl($scope, friendsService) {
        this.$scope = $scope;
        this.friendsService = friendsService;
        this.status = { isopen: false };
        this.adib = 'adib';
        $scope.model = this;
    }
    ProfileFriendsCtrl.prototype.getAllFriends = function () {
    };

    ProfileFriendsCtrl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };

    ProfileFriendsCtrl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.$scope.status.isopen = !this.$scope.status.isopen;
    };
    ProfileFriendsCtrl.$inject = ['$scope', 'FriendsService'];
    return ProfileFriendsCtrl;
})();
