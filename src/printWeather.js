const todayBox = document.querySelector('.today');
const loadingBox = document.querySelector('.loading');

const name = document.querySelector('.name');
const region = document.querySelector('.region');
const condIcon = document.querySelector('.temp-icon');
const temp = document.querySelector('.temp');
const cond = document.querySelector('.cond');
const wind = document.querySelector('.wind');
const gust = document.querySelector('.gust');
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

export default function printWeather(data) {
  name.textContent = data.name;
  region.textContent = data.location;
  condIcon.src = data.icon;
  temp.textContent = `${data.temp}ºc`;
  cond.textContent = data.condition;
  wind.textContent = `${data.wind} Knots`;
  gust.textContent = `${data.gust} Knots`;
  arrow.style.transform = `rotate(${data.wind_degree}deg)`;
  dir.textContent = `"${data.wind_dir}"`;
  switchLoading('none', 'grid');
}
