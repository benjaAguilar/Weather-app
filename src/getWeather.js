import printWeather, { printError } from './printWeather';

const searchBar = document.querySelector('#searchbar');

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
      icon: weatherData.current.condition.icon,
      temp: weatherData.current.temp_c,
      feels_temp: weatherData.current.feelslike_c,
      wind: Math.round(weatherData.current.wind_kph / 1.852),
      wind_dir: weatherData.current.wind_dir,
      wind_degree: weatherData.current.wind_degree,
    };
    console.table(data);
    printWeather(data);
  } catch (error) {
    console.log(error);
    printError();
  }
}
