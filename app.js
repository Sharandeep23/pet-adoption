async function start() {
  const weatherResponseObj = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast'
  );
  const weatherDataObj = await weatherResponseObj.json();

  const ourTemperature = weatherDataObj.properties.periods[0].temperature;
  document.querySelector('#temperature-output').textContent = ourTemperature;
}

start();
