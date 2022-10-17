export const HOUR_TIME = 60;
export const TRAVEL_TIME = 50;
export const ONE_WAY_PRICE = 700;
export const ROUND_TRIP_PRICE = 1200;

export const route = document.getElementById('route');
export const time = document.getElementById('time');
export const addTime = document.getElementById('add-time');
export const num = document.getElementById('num');
export const btn = document.querySelector('.btn');
export const result = document.querySelector('.result');
export const form = document.querySelector('.form');

export const timeZone = new Date().getTimezoneOffset() / 60;

export const AtoB = `
<option value="${18 + timeZone + ':00'}">${18 + timeZone + ':00'}</option>
<option value="${18 + timeZone + ':30'}">${18 + timeZone + ':30'}</option>
<option value="${18 + timeZone + ':45'}">${18 + timeZone + ':45'}</option>
<option value="${19 + timeZone + ':00'}">${19 + timeZone + ':00'}</option>
<option value="${19 + timeZone + ':15'}">${19 + timeZone + ':15'}</option>
<option value="${21 + timeZone + ':00'}">${21 + timeZone + ':00'}</option>
`;