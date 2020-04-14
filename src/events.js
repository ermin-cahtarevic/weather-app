import { getSearchData, getLocationData } from './api';
import { render, error, checkForm } from './dom';

let location = '';
let unit = 'metric';
const searchBtn = document.querySelector('#search');
const getLocation = document.querySelector('#get-location');
const unitToggle = document.querySelector('.unit-toggle');

searchBtn.onclick = () => {
  if (checkForm()) {
    location = document.querySelector('#search-input').value;
    getSearchData(location, unit)
      .then(response => {
        render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, unit);
      });
  } else {
    error('Please fill out the search field!');
  }
};

getLocation.onclick = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(3);
      const lon = position.coords.longitude.toFixed(3);
      getLocationData(lat, lon, unit)
        .then(response => {
          location = response.city;
          render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, unit);
        });
    });
  } else {
    error('Geolocation is not supported by this browser. Please try searching for your location.');
  }
};

unitToggle.onclick = () => {
  if (unitToggle.innerHTML === '°C') {
    getSearchData(location, 'imperial')
      .then(response => {
        render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, 'imperial');
        unit = 'imperial';
      });
  } else if (unitToggle.innerHTML === '°F') {
    getSearchData(location, 'metric')
      .then(response => {
        render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, 'metric');
        unit = 'metric';
      });
    
  }
};