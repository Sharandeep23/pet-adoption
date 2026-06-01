const wrapper = document.createDocumentFragment();

async function start() {
  const weatherResponseObj = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast',
  );
  const weatherDataObj = await weatherResponseObj.json();

  const ourTemperature = weatherDataObj.properties.periods[0].temperature;
  document.querySelector('#temperature-output').textContent = ourTemperature;
}

start();

async function petsArea() {
  const petsResponseObj = await fetch(
    'https://learnwebcode.github.io/bootcamp-pet-data/pets.json',
  );
  const petsDataArr = await petsResponseObj.json();
  for (let { name, description, birthYear, photo, species } of petsDataArr) {
    const petCardClone = document
      .querySelector('#pet-card-template')
      .content.cloneNode(true);

    petCardClone.querySelector('h3').textContent = name;
    petCardClone.querySelector('.pet-description').textContent = description;
    petCardClone.querySelector('.pet-age').textContent =
      createAgeText(birthYear);

    if (!photo) photo = '/images/fallback.jpg';

    petCardClone.querySelector('img').src = photo;
    petCardClone.querySelector('img').alt = `A ${species} named ${name}.`;

    wrapper.append(petCardClone);
  }
  document.querySelector('#pets').append(wrapper);
}

petsArea();

function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age == 1) return '1 year old';
  if (age == 0) return 'Less than a year old';

  return `${age} years old`;
}
