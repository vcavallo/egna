angular.module('EgnaApp').controller('HomeCtrl', function ($scope) {
    $scope.projects = [
      {
        id: 1,
        title: "project two name",
        thumbnail: "p2-thumb.jpg",
        caption: "advertising"
      },
      {
        id: 2,
        title: "project one name",
        thumbnail: "p1-thumb.jpg",
        caption: "editorial"
      }
    ];
});
