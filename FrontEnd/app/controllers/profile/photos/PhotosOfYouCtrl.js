var PhotosOfYouCtrl = (function () {
    function PhotosOfYouCtrl($scope) {
        this.$scope = $scope;
        this.text = 'this is text';
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
    PhotosOfYouCtrl.$inject = ['$scope'];
    return PhotosOfYouCtrl;
})();

App.app.controller("PhotosOfYouCtrl", PhotosOfYouCtrl);
//# sourceMappingURL=PhotosOfYouCtrl.js.map
