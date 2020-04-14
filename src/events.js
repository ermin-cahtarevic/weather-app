import { getSearchData, getLocationData } from './api';
import { render, error, checkForm } from './dom';

const searchBtn = document.querySelector('#search');
const getLocation = document.querySelector('#get-location');

searchBtn.onclick = () => {
  if (checkForm()) {
    const location = document.querySelector('#search-input').value;
    getSearchData(location, 'metric')
      .then(response => {
        render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId);
      });
  } else {
    error('Please fill out the search field!');
  }
}


getLocation.onclick = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(3);
      const lon = position.coords.longitude.toFixed(3);
      getLocationData(lat, lon)
        .then(response => {
          render(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId);
        });
    });
  } else {
    error('Geolocation is not supported by this browser. Please try searching for your location.');
  }
}