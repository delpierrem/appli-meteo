angular.module('weather.controller', [])

.controller('WeatherCtrl', function($scope, $stateParams, $http, DataConfig){

  $scope.meteo = {
    city: '',
    icon:'',
    description:'',
    temp:'',
    main:''
  };
  $scope.title="Météo";
  $scope.city = $stateParams.city;
  var url = DataConfig.apiUrl + $scope.city + DataConfig.units + DataConfig.appid ;
  $http.get(url).success(function(data){
    $scope.meteo.city = data.name;
    $scope.meteo.description =data.weather[0].description;
    $scope.meteo.temp = Math.round(data.main.temp);
    $scope.meteo.main =data.weather[0].main;

    if ($scope.meteo.description =="clear sky"){
      $scope.meteo.icon= "../img/sun.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="scattered clouds"){
      $scope.meteo.icon= "../img/scatclouds.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="broken clouds"){
      $scope.meteo.icon= "../img/broken.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="haze"){
      $scope.meteo.icon= "../img/haze.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="light snow"){
      $scope.meteo.icon= "../img/light_snow.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="fog"){
      $scope.meteo.icon= "../img/fog.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="overcast clouds"){
      $scope.meteo.icon= "../img/overcast.png";
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="light rain "){
      $scope.meteo.icon= "../img/light_rain.png";
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="moderate rain"){
      $scope.meteo.icon= "../img/moderate_rain.png";
      return $scope.meteo.icon;
    }





    ;
  })
})
