setTimeout(() => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}, 10000);

const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
  let clickedCard = e.target;
  clickedCard.classList.add("flip");
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src;
    cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 == img2) {
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 300);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function downloadGame() {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.oakever.tiletrip&hl=en_IN";
}

setTimeout(() => {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("cta").classList.remove("hidden");
}, 25000);
