interface IHeaderScope extends ng.IScope {
    name:string;
}
class HomeHeaderCtrl {
    static $inject: string[] = ['$scope', 'SearchServices'];
    constructor(private $scope : IHeaderScope, private searchService:SearchService) {
        
    }

    searchPeople() {

        this.searchService.searchPeople(this.$scope.name);
    }
}

App.app.controller("HomeHeaderCtrl", HomeHeaderCtrl);