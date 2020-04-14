import './events';

const main = document.querySelector('#main');
const cityDisplay = document.querySelector('.location');
const weatherDisplay = document.querySelector('.weather-type');
const tempDisplay = document.querySelector('.temperature');
const humidityDisplay = document.querySelector('.humidity');
const windDisplay = document.querySelector('.wind');
const loadWrap = document.createElement('div');
const loader = document.createElement('div');
const p = document.createElement('p');
p.innerHTML = "Please click the 'Get my location' button or search for a location.";
loadWrap.classList.add('load-wrap');
loader.classList.add('loader');

loadWrap.appendChild(p);
loadWrap.appendChild(loader)
main.appendChild(loadWrap);


const getLocation = () => {
  let lat = '', lon = '';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude.toFixed(3);
      lon = position.coords.longitude.toFixed(3);
    });
  }
}

const render = (city, temp, weather, humidity, wind) => {
  loadWrap.classList.add('d-none');
  document.querySelector('.data-wrap').classList.remove('d-none');
  cityDisplay.innerHTML = city;
  weatherDisplay.innerHTML = weather;
  tempDisplay.innerHTML = temp;
  humidityDisplay.innerHTML = humidity + '%';
  windDisplay.innerHTML = wind + ' km/h'
}


// getLocation();

export { render };