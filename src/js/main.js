'use strict';

const buttonShare = document.querySelector('.js_content_share');
const twitter = document.querySelector('.js_twitter');

const designTitle = document.querySelector('.js_title_design');
const fillTitle = document.querySelector('.js_title_fill');
const shareTitle = document.querySelector('.js_title_share');

const designContent = document.querySelector('.js_content_design');
const fillContent = document.querySelector('.js_content_fill');
const shareContent = document.querySelector('.js_content_share');

const arrowIcon1 = document.querySelector('.js_arrow_design');
const arrowIcon2 = document.querySelector('.js_arrow_fill');
const arrowIcon3 = document.querySelector('.js_arrow_share');

//objeto
const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
};

designTitle.addEventListener('click', (event) => {
  designContent.classList.toggle('collapsed');
  fillContent.classList.add('collapsed');
  shareContent.classList.add('collapsed');
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
  shareContent.classList.add('collapsed');
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
  shareContent.classList.toggle('collapsed');
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

const nameInput = document.querySelector('.js_name');
const jobInput = document.querySelector('.js_job');

const mailInput = document.querySelector('.js_email');
const linkedinInput = document.querySelector('.js_linkedin');
const githubInput = document.querySelector('.js_github');

const cardname = document.querySelector('.js_cardname');
const cardjob = document.querySelector('.js_cardjob');
const cardmail = document.querySelector('.js-mail');
const cardlinkedIn = document.querySelector('.js-linkedIn');
const cardgithub = document.querySelector('.js-github');

const renderForm = () => {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  const linkedinValue = linkedinInput.value;
  const githubValue = githubInput.value;
  const mailValue = mailInput.value;
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
    cardlinkedIn.href = linkedinValue;
  } else {
    cardlinkedIn.href = 'https://es.linkedin.com/';
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
};

function handleKeyUp(event) {
  renderForm();
}

nameInput.addEventListener('keyup', handleKeyUp);
jobInput.addEventListener('keyup', handleKeyUp);
linkedinInput.addEventListener('keyup', handleKeyUp);
githubInput.addEventListener('keyup', handleKeyUp);

//

buttonShare.addEventListener('click', (event) => {
  event.preventDefault();
  twitter.classList.toggle('collapsed');
  buttonShare.classList.add('grey');
});

// Añadir paleta

const cardPreview = document.querySelector('.js-card');
const clickRadio = document.querySelectorAll('.js-palette'); //me trae un array

const addNewPaletteClass = (palette) => {
  cardPreview.classList.add(`palette-${palette}`);
};

const resetPaletteClasses = () => {
  cardPreview.classList.remove('card__rectangle');
  cardPreview.classList.remove('palette1', 'palette2', 'palette3');
};

const handleClickRadio = (event) => {
  const palette = parseInt(event.currentTarget.value);
  data.palette = palette;
  resetPaletteClasses();
  addNewPaletteClass(palette);
};
for (const oneRadio of clickRadio) {
  oneRadio.addEventListener('click', handleClickRadio);
} //puedo hacerlo con un ForEach

// clickRadio.addEventListener('click', handleClickRadio); //no puedo escuchar un evento sobre un array, por eso usaremos un bucle para recorrerlo, lo teemos en la linea 126

// Mejor usar el value que nos da cuando hacemos el bucle, ya que necesitaré en el objeto un value 1,2 o 3 y no "palette1" tal como le escribí yo anterioemente. Para ello concatenamos el value con el "palette1"
