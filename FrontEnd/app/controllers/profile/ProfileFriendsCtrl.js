var ProfileFriendsCtrl = (function () {
    function ProfileFriendsCtrl($scope, friendsService) {
        this.$scope = $scope;
        this.friendsService = friendsService;
        this.status = { isopen: false };
        this.photos = [
            "http://tmacfitness.com/wp-content/uploads/2013/04/Beauty-of-nature-random-4884759-1280-800-1024x640.jpg",
            "http://www.wheretocampin.com/wp-content/uploads/2013/06/wallpaper_nature_103-1920x1200.jpeg",
            "http://www.mosta2bal.com/vb/imgcache/2/16278code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16279code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16280code.jpg",
            "http://tmacfitness.com/wp-content/uploads/2013/04/Beauty-of-nature-random-4884759-1280-800-1024x640.jpg",
            "http://www.wheretocampin.com/wp-content/uploads/2013/06/wallpaper_nature_103-1920x1200.jpeg",
            "http://www.mosta2bal.com/vb/imgcache/2/16278code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16279code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16280code.jpg",
            "http://tmacfitness.com/wp-content/uploads/2013/04/Beauty-of-nature-random-4884759-1280-800-1024x640.jpg",
            "http://www.wheretocampin.com/wp-content/uploads/2013/06/wallpaper_nature_103-1920x1200.jpeg",
            "http://www.mosta2bal.com/vb/imgcache/2/16278code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16279code.jpg",
            "http://www.mosta2bal.com/vb/imgcache/2/16280code.jpg"
        ];
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
