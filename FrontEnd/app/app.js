var App;
(function (App) {
    App.app = angular.module('app', ['ui.router']);
    var appViewPath = 'app/views/';
    App.app.config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                template: "thi sis aassdf"
            }).state('launchpad', {
                url: '/',
                views: {
                    '': {
                        templateUrl: appViewPath + 'launchpad/launchpad.html'
                    },
                    'signup@launchpad': {
                        templateUrl: appViewPath + 'launchpad/signup.html',
                        controller: SignupCtrl
                    },
                    'login@launchpad': {
                        templateUrl: appViewPath + 'launchpad/login.html',
                        controller: LoginCtrl
                    }
                }
            });
        }
    ]);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
