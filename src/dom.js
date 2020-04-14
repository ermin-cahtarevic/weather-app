import './events';
import { clearForm, getBackgroundImg } from './helpers';

const main = document.querySelector('#main');
const cityDisplay = document.querySelector('.location');
const weatherDisplay = document.querySelector('.weather-type');
const tempDisplay = document.querySelector('.temperature');
const humidityDisplay = document.querySelector('.humidity');
const windDisplay = document.querySelector('.wind');
const unitToggle = document.querySelector('.unit-toggle');
const errorDisplay = document.querySelector('#error');

const loadWrap = document.createElement('div');
const loader = document.createElement('div');
const p = document.createElement('p');
p.innerHTML = "Please click the 'Get my location' button or search for a location.";
loadWrap.classList.add('load-wrap');
loader.classList.add('loader');

loadWrap.appendChild(p);
loadWrap.appendChild(loader)
main.appendChild(loadWrap);

const render = (city, temp, weather, humidity, wind, iconId, unit) => {
  loadWrap.classList.add('d-none');
  document.querySelector('.data-wrap').classList.remove('d-none');
  getBackgroundImg(iconId);
  cityDisplay.innerHTML = city;
  weatherDisplay.innerHTML = weather;
  tempDisplay.innerHTML = temp;
  humidityDisplay.innerHTML = humidity + '%';
  if (unit === 'metric') {
    unitToggle.innerHTML = '°C';
    windDisplay.innerHTML = (wind * 3.6).toFixed(2) + ' km/h';
  } else if (unit === 'imperial') {
    unitToggle.innerHTML = '°F';
    windDisplay.innerHTML = wind.toFixed(2) + ' m/h';
  }
  
  clearForm();
}

const error = (errorText) => {
  errorDisplay.innerHTML = errorText;
  errorDisplay.classList.add('error-show');
  setTimeout(() => errorDisplay.classList.remove('error-show'), 5000);
}

const checkForm = () => {
  return document.querySelector('#search-input').value != '';
}

export { render, error, checkForm };