interface IHeaderScope extends ng.IScope {
    name:string;
}
class HomeHeaderCtrl {

    headervar = 'asd';
    static $inject: string[] = ['$scope', 'SearchServices'];
    constructor(private $scope : IHeaderScope, private searchService:SearchService) {
        
    }

    searchUser() {
        alert('user');
        this.searchService.searchPeople(this.$scope.name);
    }
}

App.app.controller("HomeHeaderCtrl", HomeHeaderCtrl);