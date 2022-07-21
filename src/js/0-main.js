'use strict';
const buttonShare = document.querySelector('.js_content_share');
const twitter = document.querySelector('.js_twitter');

const designTitle = document.querySelector('.js_title_design');
const fillTitle = document.querySelector('.js_title_fill');
const shareTitle = document.querySelector('.js_title_share');

const designContent = document.querySelector('.js_content_design');
const fillContent = document.querySelector('.js_content_fill');

const arrowIcon1 = document.querySelector('.js_arrow_design');
const arrowIcon2 = document.querySelector('.js_arrow_fill');
const arrowIcon3 = document.querySelector('.js_arrow_share');

const nameInput = document.querySelector('.js_name');
const jobInput = document.querySelector('.js_job');

const mailInput = document.querySelector('.js_email');
const linkedinInput = document.querySelector('.js_linkedin');
const githubInput = document.querySelector('.js_github');
const telInput = document.querySelector('.js_tlf');
const cardtel = document.querySelector('.js_cardtel');

const cardname = document.querySelector('.js_cardname');
const cardjob = document.querySelector('.js_cardjob');
const cardmail = document.querySelector('.js_cardemail');
const cardlinkedin = document.querySelector('.js_cardlinkedin');
const cardgithub = document.querySelector('.js_cardgithub');
const urlServer = 'https://awesome-profile-cards.herokuapp.com/card';
const errorMsg = document.querySelector('.js_error_msg');
const twitterButton = document.querySelector('.js_share_twitter');

let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const createNewObject = () => {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  const telValue = telInput.value;
  const linkedinValue = linkedinInput.value;
  const githubValue = githubInput.value;
  const mailValue = mailInput.value;
  data.name = nameValue;
  data.job = jobValue;
  data.phone = telValue;
  data.email = mailValue;
  data.linkedin = linkedinValue;
  data.github = githubValue;
};

designTitle.addEventListener('click', (event) => {
  designContent.classList.toggle('collapsed');
  fillContent.classList.add('collapsed');
  buttonShare.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon1.classList.toggle('arrow-down');
  if (arrowIcon2.classList.contains('arrow-down')) {
    arrowIcon2.classList.remove('arrow-down');
  }
  if (arrowIcon3.classList.contains('arrow-down')) {
    arrowIcon3.classList.remove('arrow-down');
  }
});
fillTitle.addEventListener('click', (event) => {
  fillContent.classList.toggle('collapsed');
  designContent.classList.add('collapsed');
  buttonShare.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon2.classList.toggle('arrow-down');
  if (arrowIcon1.classList.contains('arrow-down')) {
    arrowIcon1.classList.remove('arrow-down');
  }
  if (arrowIcon3.classList.contains('arrow-down')) {
    arrowIcon3.classList.remove('arrow-down');
  }
});
shareTitle.addEventListener('click', (event) => {
  buttonShare.classList.toggle('collapsed');
  designContent.classList.add('collapsed');
  fillContent.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon3.classList.toggle('arrow-down');
  if (arrowIcon1.classList.contains('arrow-down')) {
    arrowIcon1.classList.remove('arrow-down');
  }
  if (arrowIcon2.classList.contains('arrow-down')) {
    arrowIcon2.classList.remove('arrow-down');
  }
});

const renderForm = () => {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  const linkedinValue = linkedinInput.value;
  const githubValue = githubInput.value;
  const mailValue = mailInput.value;
  const telValue = telInput.value;

  if (nameValue !== '') {
    cardname.innerHTML = nameValue;
  } else {
    cardname.innerHTML = `Nombre Apellido`;
  }
  if (jobValue !== '') {
    cardjob.innerHTML = jobValue;
  } else {
    cardjob.innerHTML = `Front-end developer`;
  }
  if (linkedinValue !== '') {
    cardlinkedin.href = linkedinValue;
  } else {
    cardlinkedin.href = 'https://es.linkedin.com/';
  }
  if (githubValue !== '') {
    cardgithub.href = githubValue;
  } else {
    cardgithub.href = 'https://github.com/';
  }
  if (mailValue !== '') {
    cardmail.href = `mailto:${mailValue}`;
  } else {
    cardmail.href = 'adalab@gmail.com';
  }
  if (telValue !== '') {
    cardtel.href = `tel:${telValue}`;
  } else {
    cardtel.href = '';
  }
  return;
};

function handleKeyUp() {
  createNewObject();
  console.log(data);
  renderForm();
}

nameInput.addEventListener('keyup', handleKeyUp);
jobInput.addEventListener('keyup', handleKeyUp);
linkedinInput.addEventListener('keyup', handleKeyUp);
githubInput.addEventListener('keyup', handleKeyUp);
mailInput.addEventListener('keyup', handleKeyUp);
telInput.addEventListener('keyup', handleKeyUp);

// Función createNewElement

function createNewElement(serverResp) {
  const divShare = document.querySelector('.js_div_share');
  const pElement = document.querySelector('.js_paragraph');
  const linkElement = document.createElement('a');
  const linkText = document.createTextNode('Pulsa para acceder a tu tarjeta');
  linkElement.appendChild(linkText);
  linkElement.setAttribute('href', serverResp.cardURL);
  linkElement.setAttribute('target', 'blank');
  divShare.appendChild(linkElement);
  linkElement.parentNode.replaceChild(linkElement, pElement);
  linkElement.classList.add('fieldset-4__article--paragraph');
  console.log(linkElement);
}

// Fetch al servidor

function createCard() {
  console.log(data);
  fetch(urlServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResp) => {
      console.log(serverResp);
      twitterButton.href = `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20tarjeta%20de%20contacto.%20Espero%20que%20te%20guste.&url=${serverResp.cardURL}`;

      if (serverResp.success) {
        createNewElement(serverResp);
      } else {
        errorMsg.innerHTML = '¡Ey! No has rellenado todos los campos';
      }
      return serverResp;
    })
    .catch((error) => {
      console.log(error);
    });

  localStorage.setItem('data', JSON.stringify(data));
  renderForm();
}

//Seleccionar paletas

const allRadio = document.querySelectorAll('.js_radio');
const cardPreview = document.querySelector('.js_cardPreview');

function handlerRadio(ev) {
  const palette = parseInt(ev.currentTarget.value);
  data.palette = palette;
  cardPreview.classList.remove('palette1', 'palette2', 'palette3');
  cardPreview.classList.add(`palette${palette}`);
}

for (const oneRadio of allRadio) {
  oneRadio.addEventListener('click', handlerRadio);
}

// Botón de Reset

function cleanClasses() {
  cardPreview.classList.remove('palette1', 'palette2', 'palette3');
  cardPreview.classList.add('palette1');
  cardname.innerHTML = `Nombre Apellido`;
  cardjob.innerHTML = `Front-end developer`;
  cardlinkedin.href = 'https://es.linkedin.com/';
  cardgithub.href = 'https://github.com/';
  cardmail.href = '#';
}

function cleanInputs() {
  nameInput.value = '';
  jobInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  mailInput.value = '';
  telInput.value = '';
}

const cleanObject = () => {
  data.palette = '';
  data.name = '';
  data.job = '';
  data.phone = '';
  data.email = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';
};
const resetButton = document.querySelector('.js-reset-button');
function handleReset(ev) {
  ev.preventDefault();
  cleanClasses();
  cleanObject();
  cleanInputs();
}
resetButton.addEventListener('click', handleReset);

//Eventos

buttonShare.addEventListener('click', (event) => {
  event.preventDefault();
  twitter.classList.toggle('collapsed');
  buttonShare.classList.add('grey');
  createCard();
});

function onload() {
  let dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  console.log(dataLocalStorage);
  if (dataLocalStorage) {
    dataLocalStorage = data;
    renderForm();
    console.log(data);
  }
  designContent.classList.remove('collapsed');
  arrowIcon1.classList.add('arrow-down');
}

onload();
