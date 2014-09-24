angular.module('EgnaApp').controller('HomeCtrl', ['$scope', '$resource',
  function ($scope, $resource) {
    //$scope.projects = Project.index();
    var Projects = $resource('/projects');
    var projects = Projects.get();
    $scope.projects = projects;
  }]);
