/* eslint-disable import/no-cycle */
import getWeather from './index';

const suggestions = document.querySelector('.suggestions');

function clearSuggestions() {
  while (suggestions.firstChild) {
    suggestions.removeChild(suggestions.firstChild);
  }
}

export default async function searchLocations(location) {
  const url = `https://api.weatherapi.com/v1/search.json?key=5114ec0429b04a698b6142530240804&q=${location}`;

  clearSuggestions();

  try {
    const response = await fetch(url, { mode: 'cors' });
    const results = await response.json();
    results.forEach((place) => {
      const div = document.createElement('div');
      const name = document.createElement('p');
      const p = document.createElement('p');
      name.textContent = place.name;
      p.textContent = `${place.region}, ${place.country}`;

      div.addEventListener('click', () => {
        getWeather(place.name);
        clearSuggestions();
      });

      div.appendChild(name);
      div.appendChild(p);
      suggestions.appendChild(div);
    });
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
