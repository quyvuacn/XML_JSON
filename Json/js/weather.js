const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?lat=21.027763&lon=105.834160&appid=eb8a0f01c55e8a90eae383cac5461c16&units=metric'
const IMG_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUJwc5BDIDZAkUPWqKoHnFS96y1Gbx52_6w&usqp=CAU'
const weatherApp = angular.module('weatherApp',[])

weatherApp.controller('WeatherCtrl', function($scope,$http){
    
    $http.get(API_WEATHER).then(function({data}){
        console.log(data)
        $scope.icon = data.weather[0].icon
        $scope.img_src = `https://openweathermap.org/img/wn/${$scope.icon}@4x.png`
        $scope.current=data.main.temp
        $scope.temp_max = data.main.temp_max
        $scope.temp_min = data.main.temp_min
        $scope.wind_speed = data.wind.speed
        $scope.clouds = data.clouds ? data.clouds.all : undefined
    }).catch(err=>{
        console.log(err)
    })
})