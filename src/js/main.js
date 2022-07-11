"use strict";
const buttonShare = document.querySelector(".js_content_share");
const twitter = document.querySelector(".js_twitter");

const designTitle = document.querySelector(".js_title_design");
const fillTitle = document.querySelector(".js_title_fill");
const shareTitle = document.querySelector(".js_title_share");

const designContent = document.querySelector(".js_content_design");
const fillContent = document.querySelector(".js_content_fill");
const shareContent = document.querySelector(".js_content_share");

const arrowIcon1 = document.querySelector(".js_arrow_design");
const arrowIcon2 = document.querySelector(".js_arrow_fill");
const arrowIcon3 = document.querySelector(".js_arrow_share");

const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};




designTitle.addEventListener("click", (event) => {
  designContent.classList.toggle("collapsed");
  fillContent.classList.add("collapsed");
  shareContent.classList.add("collapsed");
  twitter.classList.add("collapsed");
  arrowIcon1.classList.toggle("arrow-down");
  if (arrowIcon2.classList.contains("arrow-down")) {
    arrowIcon2.classList.remove("arrow-down");
  }
  if (arrowIcon3.classList.contains("arrow-down")) {
    arrowIcon3.classList.remove("arrow-down");
  }
});
fillTitle.addEventListener("click", (event) => {
  fillContent.classList.toggle("collapsed");
  designContent.classList.add("collapsed");
  shareContent.classList.add("collapsed");
  twitter.classList.add("collapsed");
  arrowIcon2.classList.toggle("arrow-down");
  if (arrowIcon1.classList.contains("arrow-down")) {
    arrowIcon1.classList.remove("arrow-down");
  }
  if (arrowIcon3.classList.contains("arrow-down")) {
    arrowIcon3.classList.remove("arrow-down");
  }
});
shareTitle.addEventListener("click", (event) => {
  shareContent.classList.toggle("collapsed");
  designContent.classList.add("collapsed");
  fillContent.classList.add("collapsed");
  twitter.classList.add("collapsed");
  arrowIcon3.classList.toggle("arrow-down");
  if (arrowIcon1.classList.contains("arrow-down")) {
    arrowIcon1.classList.remove("arrow-down");
  }
  if (arrowIcon2.classList.contains("arrow-down")) {
    arrowIcon2.classList.remove("arrow-down");
  }
});

const nameInput = document.querySelector('.js_name');
const jobInput = document.querySelector('.js_job');

const mailInput = document.querySelector('.js_email');
const linkedinInput = document.querySelector('.js_linkedin');
const githubInput = document.querySelector('.js_github');

const cardname = document.querySelector('.js_cardname');
const cardjob = document.querySelector('.js_cardjob');
const cardmail = document.querySelector('.js_cardemail');
const cardlinkedin = document.querySelector('.js_cardlinkedin');
const cardgithub = document.querySelector('.js_cardgithub');

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
};

function handleKeyUp(event) {
  renderForm();
}

nameInput.addEventListener('keyup', handleKeyUp);
jobInput.addEventListener('keyup', handleKeyUp);
linkedinInput.addEventListener('keyup', handleKeyUp);
githubInput.addEventListener('keyup', handleKeyUp);



//

buttonShare.addEventListener("click", (event) => {
  event.preventDefault();
  twitter.classList.toggle("collapsed");
  buttonShare.classList.add("grey");
});

//


//Seleccionar paletas


const allRadio = document.querySelectorAll('.js_radio');
const cardPreview = document.querySelector('.js_cardPreview');

function handlerRadio (ev) {
  const palette = parseInt(ev.currentTarget.value);
  data.palette = palette;
  cardPreview.classList.remove('palette1','palette2','palette3');
  cardPreview.classList.add(`palette${palette}`);

}


for(const oneRadio of allRadio){
  oneRadio.addEventListener('click', handlerRadio);

}

/* BOTÓN RESET */

const resetButton = document.querySelector('.js-reset-button');

function handleReset (ev) {
  ev.preventDefault();
  cardPreview.classList.remove('palette1','palette2','palette3');
  cardPreview.classList.add('palette1');
  cardname.innerHTML = `Nombre Apellido`;
  cardjob.innerHTML = `Front-end developer`;
  cardlinkedin.href = 'https://es.linkedin.com/';
  cardgithub.href = 'https://github.com/';
  cardmail.href = '#';
}


resetButton.addEventListener('click', handleReset);

