import {
    HOUR_TIME,
    TRAVEL_TIME,
    ONE_WAY_PRICE,
    ROUND_TRIP_PRICE,
    route,
    time,
    addTime,
    num,
    btn,
    form,
    result,
    timeZone,
    AtoB
} from './utils/constants.js';

function countTripPrice() {
    if (route.value === "из A в B и обратно в А") {
        return ROUND_TRIP_PRICE * num.value;
    } else {
        return ONE_WAY_PRICE * num.value;
    }
}

function countTravelTime() {
    if (route.value === "из A в B и обратно в А") {
        const doubleTravelTime = TRAVEL_TIME * 2;
        const hours = Math.trunc(doubleTravelTime / HOUR_TIME);
        const minutes = doubleTravelTime % HOUR_TIME;

        return `${hours} час ${minutes} минут`;
    } else {
        return `${TRAVEL_TIME} минут`;
    }
}

function countArrivalTime(string) {
    const duration = countMinutes(string);

    const hours = Math.trunc(duration / HOUR_TIME);
    const minutes = duration % HOUR_TIME;

    return `${hours}:${minutes}`;
}

function chooseRoute() {
    time.disabled = false;
    num.disabled = false;
    num.classList.remove('select_disabled');

    if (route.value === "из A в B") {
        time.innerHTML = AtoB;
        addTime.style.display = "none";
    } else if (route.value === "из B в A") {
        addTime.style.display = "none";
        time.innerHTML = `
        <option value="${18 + timeZone + ':30'}">${18 + timeZone + ':30'}</option>
        <option value="${18 + timeZone + ':45'}">${18 + timeZone + ':45'}</option>
        <option value="${19 + timeZone + ':00'}">${19 + timeZone + ':00'}</option>
        <option value="${19 + timeZone + ':15'}">${19 + timeZone + ':15'}</option>
        <option value="${19 + timeZone + ':35'}">${19 + timeZone + ':35'}</option>
        <option value="${21 + timeZone + ':50'}">${21 + timeZone + ':50'}</option>
        <option value="${21 + timeZone + ':55'}">${21 + timeZone + ':55'}</option>
        `;
    } else if (route.value === "из A в B и обратно в А") {
        time.innerHTML = AtoB;

        addTime.style.display = "block";
        addTime.innerHTML = `
        <option value="${18 + timeZone + ':30'}">${18 + timeZone + ':30'}</option>
        <option value="${18 + timeZone + ':45'}">${18 + timeZone + ':45'}</option>
        <option value="${19 + timeZone + ':00'}">${19 + timeZone + ':00'}</option>
        <option value="${19 + timeZone + ':15'}">${19 + timeZone + ':15'}</option>
        <option value="${19 + timeZone + ':35'}">${19 + timeZone + ':35'}</option>
        <option value="${21 + timeZone + ':50'}">${21 + timeZone + ':50'}</option>
        <option value="${21 + timeZone + ':55'}">${21 + timeZone + ':55'}</option>
        `;
    }
}

function countMinutes(string) {
    const arr = string.split(':');
    return Number(arr[0]) * 60 + Number(arr[1]) + TRAVEL_TIME;
}

function filterTimes() {
    Array.from(addTime).forEach((item) => {
        if ((countMinutes(time.value) + TRAVEL_TIME) >= countMinutes(item.value)) {
            item.disabled = true;
            item.selected = false;
        } else {
            item.disabled = false;
        }
    });
}

function chooseTicketsAmount() {
    if (num.value > 0) {
        btn.disabled = false;
        btn.classList.remove('btn_disabled');
    }
}

function showResult(evt) {
    evt.preventDefault();

    result.style.display = "flex";
    result.innerHTML = `
    <p>
    Вы выбрали следующее количество билетов: ${num.value}, по маршруту ${route.value} стоимостью ${countTripPrice()}р.
    Это путешествие займет у вас ${countTravelTime()}.
    Теплоход отправляется в ${time.value}, а прибывает в ${countArrivalTime(time.value)}.
    </p>
    `
}

route.addEventListener('click', () => {
    chooseRoute();
    filterTimes();
});

time.addEventListener('click', filterTimes);
num.addEventListener('click', chooseTicketsAmount);
form.addEventListener('submit', showResult);
