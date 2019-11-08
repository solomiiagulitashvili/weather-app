const convertIcon = (icon) => {
  let converted;
  switch (icon) {
    case 'clear-day':
      converted = 'c';
      break;
    case 'clear-night':
      converted = 'c';
      break;
    case 'rain':
      converted = 'lr';
      break;
    case 'snow':
      converted = 'sn';
      break;
    case 'sleet':
      converted = 'sl';
      break;
    case 'wind':
      converted = 'h';
      break;
    case 'fog':
      converted = 'hc';
      break;
    case 'cloudy':
      converted = 'lc';
      break;
    case 'partly-cloudy-night':
      converted = 'hc';
      break;
    case 'partly-cloudy-day':
      converted = 'lc';
      break;
    case 'hail':
      converted = 'h';
      break;
    case 'thunderstorm':
      converted = 't';
      break;
    case 'tornado':
      converted = 't';
      break;
    default:
      break;
  }
  return `http://metaweather.com/static/img/weather/${converted}.svg`;
};

export default convertIcon;
