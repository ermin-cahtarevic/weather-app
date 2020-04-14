import { error } from './dom';

const apiId = 'ef6615ba447292811b06a9a82b11ecd9';

const getSearchData = async (location, unit = 'metric') => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiId}`,
      {mode: 'cors'});
    const weatherData = await response.json();
    return {
      city: `${weatherData.city.name}, ${weatherData.city.country}`, 
      temp: Math.round(weatherData.list[0].main.temp),
      weather: weatherData.list[0].weather[0].main,
      humidity: weatherData.list[0].main.humidity,
      wind: (weatherData.list[0].wind.speed * 3.6).toFixed(2)
    }
  } catch (err) {
    error('City not found! Please check your spelling.');
  }
}

const getLocationData = async (lat, lon, unit = 'metric') => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&APPID=${apiId}`,
      {mode: 'cors'});
    const weatherData = await response.json();
    return {
      city: `${weatherData.city.name}, ${weatherData.city.country}`, 
      temp: Math.round(weatherData.list[0].main.temp),
      weather: weatherData.list[0].weather[0].main,
      humidity: weatherData.list[0].main.humidity,
      wind: (weatherData.list[0].wind.speed * 3.6).toFixed(2)
    }
  } catch (err) {
    error('Please check your input!')
  }
}

export { getSearchData, getLocationData };