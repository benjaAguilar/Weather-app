import getImage from './getImage';

const todayBox = document.querySelector('.today');
const loadingBox = document.querySelector('.loading');

const name = document.querySelector('.name');
const region = document.querySelector('.region');
const condIcon = document.querySelector('.temp-icon');
const temp = document.querySelector('.temp');
const cond = document.querySelector('.cond');
const fLike = document.querySelector('#feels');
const humidity = document.querySelector('#humi');
const wind = document.querySelector('.wind');
const arrow = document.querySelector('.arrow');
const dir = document.querySelector('.dir');

export function switchLoading(load, today) {
  loadingBox.style.display = load;
  todayBox.style.display = today;

  if (load === 'grid') {
    name.textContent = 'The Color-Cast';
    region.textContent = 'Daily Forecast';
  }
}

export function printError() {
  todayBox.style.display = 'none';
  loadingBox.style.display = 'none';
  name.textContent = 'Forecast not found ;(';
  region.textContent = 'Please try another';
}

export default function printWeather(data) {
  name.textContent = data.name;
  region.textContent = data.location;
  condIcon.src = getImage(data.code);
  temp.textContent = `${data.temp}ºc`;
  cond.textContent = data.condition;
  fLike.textContent = data.feels_temp;
  humidity.textContent = `${data.humidity}%`;
  wind.textContent = `${data.wind} Knots`;
  arrow.style.transform = `rotate(${data.wind_degree}deg)`;
  dir.textContent = `"${data.wind_dir}"`;
  switchLoading('none', 'grid');
}
