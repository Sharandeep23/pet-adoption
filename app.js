async function start() {
  const weatherResponseObj = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast'
  );
  const weatherDataObj = await weatherResponseObj.json();

  const ourTemperature = weatherDataObj.properties.periods[0].temperature;
  document.querySelector('#temperature-output').textContent = ourTemperature;
}

start();

async function petsArea() {
  const petsResponseObj = await fetch(
    'https://learnwebcode.github.io/bootcamp-pet-data/pets.json'
  );
  const petsDataArr = await petsResponseObj.json();
  const petsEl = document.querySelector('#pets');
  for (const { name, description, birthYear, photo, species } of petsDataArr) {
    petsEl.innerHTML += `<div class="pet-card">
            <div class="pet-card-text">
              <h3>${name}</h3>
              <p class="pet-description">
                ${description}
              </p>
              <p class="pet-age">${new Date().getFullYear() - birthYear}</p>
            </div>
            <div class="pet-card-photo">
              <img src="${photo}" alt="A ${species}" />
            </div>
          </div>`;
  }
}

petsArea();
