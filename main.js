function getNameDayWeek(dayWeek) {
    let dayWeekText = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    return dayWeekText[dayWeek]
}

function getNameMonth(numberMonth) {
    let nameMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return nameMonth[numberMonth];
}

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function nameDay() {
    const day = new Date();
    const dayWeek = day.getDay();

    return getNameDayWeek(dayWeek);
}

function nameDate() {
    const data = new Date();

    return data.toLocaleDateString('en', {dateStyle: 'long'})
}

function timeNow() {
    const time = new Date();
    
    return `${zeroLeft(time.getHours())}:${zeroLeft(time.getMinutes())}:${zeroLeft(time.getSeconds())}`
}


function upgradeDate(){
    const day = document.querySelector('#day');
    const data = document.querySelector('#date');
    const clock = document.querySelector('#clock');

    day.innerHTML = nameDay();
    data.innerHTML = nameDate();
    clock.innerHTML = timeNow();
}

upgradeDate();

setInterval(upgradeDate,1000)

