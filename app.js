async function start() {
  const responseObj = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast'
  );
  const weatherData = await responseObj.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;

  console.log(ourTemperature);
}

start();
