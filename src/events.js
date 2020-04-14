import { getSearchData, getLocationData } from './api'; 
import { clearForm } from './helpers';
import { render } from './dom';

const searchBtn = document.querySelector('#search');

searchBtn.onclick = () => {
  const location = document.querySelector('#search-input').value;
  getSearchData(location, 'metric')
    .then(response => {
      render(response.city, response.temp, response.weather, response.humidity, response.wind);
      clearForm();
    });
}

