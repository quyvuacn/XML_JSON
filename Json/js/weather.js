const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?&lat=21.027763&lon=105.834160&appid=eb8a0f01c55e8a90eae383cac5461c16&units=metric'
const weatherApp = angular.module('weatherApp',[])

weatherApp.controller('WeatherCtrl', function($scope,$http){
    $http.get(API_WEATHER).then(function({data}){
            $scope.keySearch =''
            $scope.name = "Ha Noi"
            $scope.country = "VN"
            $scope.icon = data.weather[0].icon
            $scope.img_src = `https://openweathermap.org/img/wn/${$scope.icon}@4x.png`
            $scope.current=data.main.temp
            $scope.temp_max = data.main.temp_max
            $scope.temp_min = data.main.temp_min
            $scope.wind_speed = data.wind.speed
        $scope.changeKey = () =>{
            let q = $scope.keySearch.split(' ').join('%20')
            $http.get(`https://api.openweathermap.org/data/2.5/weather?&q=${q}&appid=eb8a0f01c55e8a90eae383cac5461c16&units=metric`)
                .then(({data})=>{
                    $scope.icon = data.weather[0].icon
                    $scope.img_src = `https://openweathermap.org/img/wn/${$scope.icon}@4x.png`
                    $scope.current=data.main.temp
                    $scope.temp_max = data.main.temp_max
                    $scope.temp_min = data.main.temp_min
                    $scope.wind_speed = data.wind.speed
                    $scope.name = data.name
                    $scope.country = data.sys.country
                }).catch(err=>{
                    alert('Thành phố nhập không hợp lệ')
            })
        }

    }).catch(err=>{
        console.log(err)
    })
})