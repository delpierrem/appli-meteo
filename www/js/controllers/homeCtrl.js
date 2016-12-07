angular.module('home.controller', [])

.controller('HomeCtrl', function($scope, $ionicLoading, $state){
  $scope.title ="Accueil";
  $scope.search = function(city){
$state.go('weather',{city:city})
  };
});


// $ionicLoading.show({
//   template: 'Loading...',
//   duration: 3000
// });
