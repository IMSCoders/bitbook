var FriendsService = (function () {
    function FriendsService() {
    }
    FriendsService.prototype.getAllFriends = function (userId) {
    };

    FriendsService.prototype.unfriend = function () {
        alert('unfriend service');
    };

    FriendsService.prototype.hideFromFeed = function () {
        alert('hide from feed service');
    };
    FriendsService.$inject = [];
    return FriendsService;
})();

App.app.service("FriendsService", FriendsService);
//# sourceMappingURL=FriendsService.js.map
