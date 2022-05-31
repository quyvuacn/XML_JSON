var today = new Date();
var weekDay = '';
switch (today.getDay()) {
    case 0:
        weekDay = 'Sun';
        break;
    case 1:
        weekDay = 'Mon';
        break;
    case 2:
        weekDay = 'Tue';
        break;
    case 3:
        weekDay = 'Wed';
        break;
    case 4:
        weekDay = 'Thu';
        break;
    case 5:
        weekDay = 'Fri';
        break;
    case 6:
        weekDay = 'Sat';
        break;
}
var date = weekDay + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + today.getDate() + '-'+ (today.getMonth() + 1) + '-' + today.getFullYear();
var hour = today.getHours();
var time = hour + ':' + today.getMinutes();


// set bg color and sun's position depend on time
var bgColor = '#feefc7';
if (hour > 5 && today.getHours() <= 7) {
    bgColor = '#efa18b';
    $('.sun').css('transform', 'rotate(-150deg) translate(40vw) rotate(-150deg)');
} else if (hour <= 10) {
    bgColor = '#e3c498';
} else if (hour <= 14) {
    bgColor = '#f6e9d2';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
} else if (hour <= 16) {
    bgColor = '#e3c498';
    $('.sun').css('transform', 'rotate(-60deg) translate(40vw) rotate(-60deg)');
    $('.weather').css('left', '10%');
} else if (hour <= 17) {
    bgColor = '#efa18b';
    $('.weather').css('left', '10%');
    $('.sun').css('transform', 'rotate(-30deg) translate(40vw) rotate(-30deg)');
} else if (today.getHours() >= 18 || today.getHours() <= 5) {
    bgColor = '#010a3d';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
    $('.sun').css('background-color', '#e6dde4');
    $('.date').css('color', '#e6dde4');
    $('.time').css('color', '#e6dde4');
    $('.google a').css('color', '#e6dde4');
    $('.google path').css('fill', '#e6dde4');
}

// icon set: https://www.iconfinder.com/iconsets/weather-color-2
var cloudy = '<img src="images/cloudy.png">';
var foggy = '<img src="images/foggy.png">';
var heavy_rain = '<img src="images/heavy_rain.png">';
var light_rain = '<img src="images/light_rain.png">';
var light_sun = '<img src="images/light_sun.png">';
var moderate_rain = '<img src="images/moderate_rain.png">';
var rainy_sun = '<img src="images/rainy_sun.png">';
var snowy = '<img src="images/snowy.png">';
var storm = '<img src="images/storm.png">';
var sun_foggy = '<img src="images/sun_foggy.png">';
var sunny = '<img src="images/sunny.png">';
var sun_windy = '<img src="images/sun_windy.png">';
var tornado = '<img src="images/tornado.png">';
var thunder = '<img src="images/thunder.png">';
var windy = '<img src="images/windy.png">';
var hail_rain = '<img src="images/hail_rain.png">';


