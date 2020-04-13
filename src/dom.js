const main = document.querySelector('#main');
const city = document.querySelector('.location');
const weather = document.querySelector('.weather-type');
const temp = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const loadWrap = document.createElement('div');
const loader = document.createElement('div');
loadWrap.classList.add('load-wrap');
loader.classList.add('loader');

const apiId = 'ef6615ba447292811b06a9a82b11ecd9';
const location = 'Zavidovici,ba';
const unit = 'metric'

loadWrap.appendChild(loader)
main.appendChild(loadWrap);


const getLocation = () => {
  let lat = '', lon = '';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude.toFixed(3);
      lon = position.coords.longitude.toFixed(3);
      getData(lat, lon);
    });
  }
}

async function getData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiId}`,
      {mode: 'cors'});
    const weatherData = await response.json();
    loadWrap.classList.add('d-none');
    document.querySelector('.data-wrap').classList.remove('d-none');
    city.innerHTML = `${weatherData.city.name}, ${weatherData.city.country}`;
    weather.innerHTML = weatherData.list[0].weather[0].main;
    // temp.innerHTML = Math.round(weatherData.list[0].main.temp);
    humidity.innerHTML = weatherData.list[0].main.humidity + '%';
    wind.innerHTML = (weatherData.list[0].wind.speed * 3.6).toFixed(2) + ' km/h'
  } catch (err) {
    
  }
  
}

getLocation();