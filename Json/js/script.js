var today = new Date();
var weekDay = '';
var date = weekDay + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + today.getDate() + '-'+ (today.getMonth() + 1) + '-' + today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
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
setInterval(()=>{
    today = new Date()
    date = weekDay + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + today.getDate() + '-'+ (today.getMonth() + 1) + '-' + today.getFullYear();
    hour = today.getHours();
    minute = today.getMinutes();
    document.querySelector('.date').textContent = date
    document.querySelector('.time').textContent = `${hour}:${ minute >0 ? minute : '0'+minute}`
},1000)



// set bg color and sun's position depend on time
var bgColor = '#feefc7';
if (hour > 5 && today.getHours() <= 7) {
    bgColor = '#efa18b';
    $('.sun').css('transform', 'rotate(-150deg) translate(40vw) rotate(-150deg)');
    $('.container').css('background-color',bgColor)
} else if (hour <= 10) {
    bgColor = '#e3c498';
    $('.container').css('background-color',bgColor)
} else if (hour <= 14) {
    bgColor = '#f6e9d2';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
    $('.container').css('background-color',bgColor)
} else if (hour <= 16) {
    bgColor = '#e3c498';
    $('.sun').css('transform', 'rotate(-60deg) translate(40vw) rotate(-60deg)');
    $('.container').css('background-color',bgColor)
} else if (hour <= 17) {
    bgColor = '#efa18b';
    $('.sun').css('transform', 'rotate(-30deg) translate(40vw) rotate(-30deg)');
    $('.container').css('background-color',bgColor)
} else if (today.getHours() >= 18 || today.getHours() <= 5) {
    bgColor = '#010a3d';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
    $('.sun').css('background-color', '#e6dde4');
    $('.container').css('background-color',bgColor)
    $('.date').css('color', '#4cceea');
    $('.time').css('color', '#4cceea');

}




