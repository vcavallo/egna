angular.module('EgnaApp').controller('ProjectCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.projectId = $routeParams.projectId;
  }]);
