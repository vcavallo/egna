angular
    .module('EgnaApp', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            }).
            when('/projects/:projectId/', {
                templateUrl: 'project.html',
                controller: 'ProjectCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
