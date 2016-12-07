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
  var url = DataConfig.apiUrl + $scope.city + DataConfig.units+ DataConfig.lang + DataConfig.appid  ;
  $http.get(url).success(function(data){
    $scope.meteo.city = data.name;
    $scope.meteo.description =data.weather[0].description;
    $scope.meteo.temp = Math.round(data.main.temp);
    $scope.meteo.main =data.weather[0].main;

    if ($scope.meteo.description =="ensoleillé"){
      $scope.meteo.icon= "sun.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="nuageux"){
      $scope.meteo.icon= "scatclouds.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="nuageux"){
      $scope.meteo.icon= "broken.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="nuageux"){
      $scope.meteo.icon= "haze.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="light snow"){
      $scope.meteo.icon= "light_snow.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="fog"){
      $scope.meteo.icon= "fog.png" ;
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="overcast clouds"){
      $scope.meteo.icon= "overcast.png";
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="light rain "){
      $scope.meteo.icon= "light_rain.png";
      return $scope.meteo.icon;
    }
    else if ($scope.meteo.description =="moderate rain"){
      $scope.meteo.icon= "moderate_rain.png";
      return $scope.meteo.icon;
    }





    ;
  })
})
