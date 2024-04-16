/* eslint-disable import/no-cycle */
// eslint-disable-next-line no-unused-vars
import css from './styles.css';
import searchLocations, { clearSuggestions } from './searchLocation';
import getCoords from './userLocation';
import getWeather from './getWeather';
import { switchLoading } from './printWeather';

// icons
import arrow from './imgs/arrow.svg';
import logo from './imgs/logo.svg';
import search from './imgs/search.svg';
import fLike from './imgs/feels-like.svg';
import humidity from './imgs/humidity.svg';
import wind from './imgs/wind.svg';
import gif from './imgs/logo-gif.gif';

document.querySelector('.logo-img').src = logo;
document.querySelector('.search-icon').src = search;
document.querySelector('.flike').src = fLike;
document.querySelector('.humidi').src = humidity;
document.querySelector('.windi').src = wind;
document.querySelector('.arrow').src = arrow;
document.querySelector('.gifaso').src = gif;

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
