import { getSearchData, getLocationData } from './api';
import { render, checkForm } from './dom';
import error from './error';

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
        if (Object.keys(response).length === 0 && response.constructor === Object) {
          return false;
        }
        render(
          response.city,
          response.temp,
          response.weather,
          response.humidity,
          response.wind,
          response.iconId,
          unit,
        );
        return false;
      })
      .catch(err => {
        error(err);
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
          if (Object.keys(response).length === 0 && response.constructor === Object) {
            return false;
          }
          render(
            response.city,
            response.temp,
            response.weather,
            response.humidity,
            response.wind,
            response.iconId,
            unit,
          );
          return false;
        })
        .catch(err => {
          error(err);
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
      })
      .catch(err => {
        error(err);
      });
  } else if (unitToggle.innerHTML === '°F') {
    getSearchData(location, 'metric')
      .then(response => {
        render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, 'metric');
        unit = 'metric';
      })
      .catch(err => {
        error(err);
      });
  }
};