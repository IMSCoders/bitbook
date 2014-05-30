module App {
    export var app = angular.module('app', ['ui.router']);
    var appViewPath = 'app/views/';
    app.config([
        '$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        '': {
                            templateUrl: appViewPath + 'home/home.html',
                        },
                        'header@home': {
                            templateUrl: appViewPath + 'home/home-header.html',
                            //controller:HomeHeaderCtrl
                        },
                        'feed@home': {
                            templateUrl: appViewPath + 'home/home-newsfeed.html',
                            controller:NewsFeedCtrl
                        }
                    }
                })
                .state('launchpad', {
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
}