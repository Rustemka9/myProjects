﻿function getRemains () {
    let currentDate = new Date();
    let nextYear = currentDate.getFullYear() + 1;
    let newYear = new Date(nextYear + '-01-01 00:00');

    let timeDiff = new Date(newYear.getTime() - currentDate.getTime() + currentDate.getTimezoneOffset() * 60 * 1000);
    let days = parseInt(timeDiff.getTime() / 1000 / 60 / 60 /24);
    let hours = timeDiff.getHours();
    let minutes = timeDiff.getMinutes();
    let seconds = timeDiff.getSeconds();

    remains.textContent = 'До нового года осталось: ' + days + ' дней ' + hours + ' часов ' + minutes + ' минут ' + seconds + ' секунд';
}

setInterval(getRemains, 0);