/* eslint-disable import/no-cycle */
// eslint-disable-next-line no-unused-vars
import css from './styles.css';
import searchLocations from './searchLocation';
import getCoords from './userLocation';

const searchBar = document.querySelector('#searchbar');
const searchBtn = document.querySelector('#search-btn');

export default async function getWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=5114ec0429b04a698b6142530240804&q=${location}`;
  searchBar.value = '';
  try {
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
    const data = {
      name: weatherData.location.name,
      location: `${weatherData.location.region}, ${weatherData.location.country}`,
      condition: weatherData.current.condition.text,
      temp: weatherData.current.temp_c,
      feels_temp: weatherData.current.feelslike_c,
      wind: weatherData.current.wind_kph,
      gust: weatherData.current.gust_kph,
      wind_dir: weatherData.current.wind_dir,
      wind_degree: weatherData.current.wind_degree,
    };
    console.table(data);
  } catch (error) {
    console.log(error);
  }
}

const userCoords = getCoords();
userCoords.then((res) => {
  const coords = `${res[0]}, ${res[1]}`;
  getWeather(coords);
});
searchBar.addEventListener('input', () => {
  searchLocations(searchBar.value);
});
searchBtn.addEventListener('click', () => {
  getWeather(searchBar.value);
});
