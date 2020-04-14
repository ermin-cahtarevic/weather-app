import Clear from './img/clear.jpg';
import ClearNight from './img/clear-night.jpg';
import Cloudy from './img/cloudy.jpg';
import BrokenClouds from './img/broken-clouds.jpg';
import FewClouds from './img/few-clouds.jpg';
import Mist from './img/mist.jpg';
import Rain from './img/rain.jpg';
import Snow from './img/snow.jpg';
import Thunderstorm from './img/thunderstorm.jpg';

const clearForm = () => {
  document.querySelector('#search-input').value = '';
}

const getBackgroundImg = (id) => {
  const body = document.querySelector('body');
  switch (id) {
    case '01d':
      body.style.backgroundImage = `url('${Clear}')`;
      break;
    case '01n':
      body.style.backgroundImage = `url('${ClearNight}')`;
      break;
    case '02d':
      body.style.backgroundImage = `url('${FewClouds}')`;
      break;
    case '02n':
    case '03n':
    case '04n':
    case '04d':
      body.style.backgroundImage = `url('${BrokenClouds}')`;
      break;
    case '03d':
      body.style.backgroundImage = `url('${Cloudy}')`;
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      body.style.backgroundImage = `url('${Rain}')`;
      break;
    case '11d':
    case '11n':
      body.style.backgroundImage = `url('${Thunderstorm}')`;
      break;
    case '13d':
    case '13n':
      body.style.backgroundImage = `url('${Snow}')`;
      break;
    case '50d':
    case '50n':
      body.style.backgroundImage = `url('${Mist}')`;
      break;

    default:
      body.style.backgroundImage = `url('${Clear}')`;
      break;
  }
}

export { clearForm, getBackgroundImg }