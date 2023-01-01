const ratings = document.querySelectorAll(".card__rate");
const submit = document.querySelector(".card__submit");
const greetings = document.querySelector(".greetings__resume");
const rate = document.querySelector(".rate");
const greeting__card = document.querySelector(".greetings");
var rating;
ratings.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating = rate.innerHTML;
  });
});
submit.addEventListener("click", () => {
  if (rating != undefined) {
    greetings.innerHTML = `You selected ${rating} out of 5`;
    rate.style.display = "none";
    greeting__card.style.display = "flex";
  }
});
