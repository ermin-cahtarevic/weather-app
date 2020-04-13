const div = document.querySelector('#main');
const city = document.createElement('div');
const weather = document.createElement('div');
const temp = document.createElement('div');
const icon = document.createElement('img');

const apiId = 'ef6615ba447292811b06a9a82b11ecd9';
const location = 'Visoko,ba';
const unit = 'metric'



const getLocation = () => {
  let lat = '', lon = '';
  var x = document.getElementById("main");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude.toFixed(3);
      lon = position.coords.longitude.toFixed(3);
      console.log('first',lat, lon);
      getData(lat, lon);
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  console.log('second',lat, lon);
  
}

async function getData(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&APPID=${apiId}`,
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
  } catch (err) {
    // if (window.confirm('Location not found! Please fill out search field again.')) {
    //   window.location.reload(true);
    // }
  }
  
}

// getLocation();