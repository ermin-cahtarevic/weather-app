import error from './error';

const apiId = 'ef6615ba447292811b06a9a82b11ecd9';

const getSearchData = async (location, unit = 'metric') => {
  let returnValue = {};
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiId}`,
      { mode: 'cors' });
    const weatherData = await response.json();
    returnValue = {
      city: `${weatherData.city.name}, ${weatherData.city.country}`,
      temp: Math.round(weatherData.list[0].main.temp),
      weather: weatherData.list[0].weather[0].main,
      humidity: weatherData.list[0].main.humidity,
      wind: weatherData.list[0].wind.speed,
      iconId: weatherData.list[0].weather[0].icon,
    };
  } catch (err) {
    error('City not found! Please check your spelling.');
  }
  return returnValue;
};

const getLocationData = async (lat, lon, unit = 'metric') => {
  let returnValue = {};
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&APPID=${apiId}`,
      { mode: 'cors' });
    const weatherData = await response.json();
    returnValue = {
      city: `${weatherData.city.name}, ${weatherData.city.country}`,
      temp: Math.round(weatherData.list[0].main.temp),
      weather: weatherData.list[0].weather[0].main,
      humidity: weatherData.list[0].main.humidity,
      wind: weatherData.list[0].wind.speed,
      iconId: weatherData.list[0].weather[0].icon,
    };
  } catch (err) {
    error('Please check your input!');
  }
  return returnValue;
};

export { getSearchData, getLocationData };