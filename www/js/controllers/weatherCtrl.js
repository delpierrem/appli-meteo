angular.module('weather.controller', [])

.controller('WeatherCtrl', function($scope, $stateParams, $http, DataConfig, $ionicLoading, $cordovaGeolocation){
  $scope.city = $stateParams.city;

  $ionicLoading.show({
    template: 'Plus c\'est long, plus c\'est bon...',
    duration: 1500
  })
  $scope.meteo = {
    city: '',
    description:'',
    temp:'',
    main:''
  };

  if (!$scope.city) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat  = position.coords.latitude;
      var lng = position.coords.longitude;
      var url = DataConfig.apiUrl2 + 'lat=' + lat + '&lon=' + lng + DataConfig.units + DataConfig.lang + DataConfig.appid;
      $http.get(url).success(function(data){
        $ionicLoading.hide()
        $scope.title=  "Météo à " + data.name;
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
        };
      })
    })
  }
  else  {
    var url = DataConfig.apiUrl +$scope.city + DataConfig.units + DataConfig.lang + DataConfig.appid ;
    $http.get(url).success(function(data){
      $ionicLoading.hide()
      $scope.title=  "Météo à " + data.name;
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
      };
    })
  };


})
