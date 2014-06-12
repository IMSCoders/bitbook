var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.searchPeople = function (name) {
    };
    SearchService.$inject = [];
    return SearchService;
})();

App.app.service("SearchService", SearchService);
