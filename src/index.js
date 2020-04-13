const div = document.querySelector('#main');

async function getData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Zenica,ba&units=metric&APPID=ef6615ba447292811b06a9a82b11ecd9',
{mode: 'cors'});
  const weatherData = await response.json();
  div.innerHTML = weatherData.weather[0].main;
  div.innerHTML += weatherData.main.temp + '°C'
}

getData();