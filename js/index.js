var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("MySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// SOCIAL FEED
window.PixleeAsyncInit = function () {
  Pixlee.init({ apiKey: "-JbCLpups-8uaIYTgxTQ" });
  Pixlee.addSimpleWidget({ widgetId: "31755" });
};

// ABOUT READ MORE

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//MODAL WINDOW
const events = document.querySelector(".events");
const jobs = document.querySelector(".jobs");
const loyal = document.querySelector(".loyal");
const functions = document.querySelector(".functions");

const overlayEvents = document.querySelector(".overlay-events");
const overlayJobs = document.querySelector(".overlay-jobs");
const overlayLoyal = document.querySelector(".overlay-loyal");
const overlayFunctions = document.querySelector(".overlay-functions");

const btnCloseModalEvents = document.querySelector(".close-modal-events");
const btnCloseModalJobs = document.querySelector(".close-modal-jobs");
const btnCloseModalLoyal = document.querySelector(".close-modal-loyal");
const btnCloseModalFunctions = document.querySelector(".close-modal-functions");

const btnsOpenModalEvents = document.querySelector(".btn-whatson");
const btnsOpenModalJobs = document.querySelector(".btn-jobs");
const btnsOpenModalLoyal = document.querySelector(".btn-loyal");
const btnsOpenModalFunctions = document.querySelector(".btn-functions");

// //OPEN
const openModalEvents = function () {
  events.classList.remove("hidden");
  overlayEvents.classList.remove("hidden");
};

const openModalJobs = function () {
  jobs.classList.remove("hidden");
  overlayJobs.classList.remove("hidden");
};

const openModalLoyal = function () {
  loyal.classList.remove("hidden");
  overlayLoyal.classList.remove("hidden");
};

const openModalFunctions = function () {
  functions.classList.remove("hidden");
  overlayFunctions.classList.remove("hidden");
};

// //CLOSE
const closeModalEvents = function () {
  events.classList.add("hidden");
  overlayEvents.classList.add("hidden");
};

const closeModalJobs = function () {
  jobs.classList.add("hidden");
  overlayJobs.classList.add("hidden");
};

const closeModalLoyal = function () {
  loyal.classList.add("hidden");
  overlayLoyal.classList.add("hidden");
};

const closeModalFunctions = function () {
  functions.classList.add("hidden");
  overlayFunctions.classList.add("hidden");
};

// //OPEN FUNCTIONS
btnsOpenModalEvents.addEventListener("click", openModalEvents);
btnsOpenModalJobs.addEventListener("click", openModalJobs);
btnsOpenModalLoyal.addEventListener("click", openModalLoyal);
btnsOpenModalFunctions.addEventListener("click", openModalFunctions);

// //CLOSE FUNCTIONS
btnCloseModalEvents.addEventListener("click", closeModalEvents);
btnCloseModalJobs.addEventListener("click", closeModalJobs);
btnCloseModalLoyal.addEventListener("click", closeModalLoyal);
btnCloseModalFunctions.addEventListener("click", closeModalFunctions);

overlayEvents.addEventListener("click", closeModalEvents);
overlayJobs.addEventListener("click", closeModalJobs);
overlayLoyal.addEventListener("click", closeModalLoyal);
overlayFunctions.addEventListener("click", closeModalFunctions);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !events.classList.contains("hidden")) ||
    (e.key === "Escape" && !jobs.classList.contains("hidden")) ||
    (e.key === "Escape" && !loyal.classList.contains("hidden")) ||
    (e.key === "Escape" && !functions.classList.contains("hidden"))
  ) {
    closeModalEvents();
    closeModalJobs();
    closeModalLoyal();
    closeModalFunctions();
  }
});
