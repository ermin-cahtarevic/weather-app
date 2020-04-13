const div = document.querySelector('#main');
const city = document.createElement('div');
const weather = document.createElement('div');
const temp = document.createElement('div');
const icon = document.createElement('img');

const apiId = 'ef6615ba447292811b06a9a82b11ecd9';
const location = 'Sarajevo,ba';
const unit = 'metric'

async function getData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiId}`,
{mode: 'cors'});
  const weatherData = await response.json();
  city.innerHTML = `${weatherData.city.name}, ${weatherData.city.country}`;
  weather.innerHTML = weatherData.list[0].weather[0].main;
  temp.innerHTML = Math.round(weatherData.list[0].main.temp) + '°C';
  const iconCode = weatherData.list[0].weather[0].icon;
  icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  div.appendChild(city);
  div.appendChild(weather);
  div.appendChild(temp);
  div.appendChild(icon);
}

getData();