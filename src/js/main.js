"use strict";

const designTitle = document.querySelector(".js_title_design");
const fillTitle = document.querySelector(".js_title_fill");
const shareTitle = document.querySelector(".js_title_share");

const designContent = document.querySelector(".js_content_design");
const fillContent = document.querySelector(".js_content_fill");
const shareContent = document.querySelector(".js_content_share");

const arrowIcon = document.querySelector(".js_arrow");

designTitle.addEventListener("click", (event) =>
  designContent.classList.toggle("collapsed")
);

fillTitle.addEventListener("click", (event) =>
  fillContent.classList.toggle("collapsed")
);

shareTitle.addEventListener("click", (event) =>
  shareContent.classList.toggle("collapsed")
);

// crear objeto para futuro JSON al pulsar el botón
const buttonShare = document.querySelector(".js_content_share");

function getData(objectData) {
  const newCard = {
    name: document.querySelector(".js-name").value,
    work: document.querySelector(".js-work").value,
  };
  // return newCard;
}

function handleClickButton(event) {
  event.preventDefault();
  console.log(getData);
}
buttonShare.addEventListener("click", handleClickButton);
