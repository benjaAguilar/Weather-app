/* eslint-disable import/no-cycle */
// eslint-disable-next-line no-unused-vars
import css from './styles.css';
import searchLocations from './searchLocation';
import getCoords from './userLocation';
import getWeather from './getWeather';

const searchBar = document.querySelector('#searchbar');

const userCoords = getCoords();
userCoords.then((res) => {
  const coords = `${res[0]}, ${res[1]}`;
  getWeather(coords);
});
searchBar.addEventListener('input', () => {
  searchLocations(searchBar.value);
});

console.log(new Date());
