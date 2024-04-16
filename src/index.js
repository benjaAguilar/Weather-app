/* eslint-disable import/no-cycle */
// eslint-disable-next-line no-unused-vars
import css from './styles.css';
import searchLocations, { clearSuggestions } from './searchLocation';
import getCoords from './userLocation';
import getWeather from './getWeather';
import { switchLoading } from './printWeather';

const searchBar = document.querySelector('#searchbar');
const homeBtn = document.querySelector('.my-home');

function userHome() {
  switchLoading();
  const userCoords = getCoords();
  userCoords.then((res) => {
    const coords = `${res[0]}, ${res[1]}`;
    getWeather(coords);
  });
}

searchBar.addEventListener('input', () => {
  searchLocations(searchBar.value);
});

searchBar.addEventListener('blur', () => {
  setTimeout(clearSuggestions, 200);
});

homeBtn.addEventListener('click', userHome);
userHome();
