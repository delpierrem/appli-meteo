angular.module('home.controller', [])

.controller('HomeCtrl', function($scope, $ionicLoading, $state, $cordovaGeolocation){
  $scope.city;
  $scope.title ="Accueil";
  $scope.search = function(city){
    $state.go('weather',{city:city})
  };

  $scope.geo = function() {
    $state.go('weather')
  }
});

// $ionicLoading.show({
//   template: 'Loading...',
//   duration: 3000
// });
