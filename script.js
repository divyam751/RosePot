rose = [
  "🌹 Cultivate love, it's Rose Day! 🌹",
  "Just like a rose perseveres through thorns, so can you overcome life's challenges with resilience and strength.",
  "In the garden of life, be a rose - bloom with confidence, stand tall in adversity, and spread your fragrance of positivity.",
  "The beauty of a rose lies not just in its petals but in its ability to endure storms and still blossom. Embrace your challenges and grow.",
  "As a rose unfolds its layers to reveal its beauty, uncover the layers of your potential, and let your inner strength shine.",
  "🌹 Cultivate love, it's Rose Day! 🌹",
];

let quoteBox = document.querySelector(".quote");
let btn = document.querySelector(".btn");
var idx = 1;
quoteBox.textContent = rose[0];

const handleQuote = () => {
  if (idx === 0) {
    for (let i = 1; i < 5; i++) {
      let flower = document.querySelector(`#flower${i}`);
      flower.style.display = "none";
    }
    btn.textContent = "Grow Rose";
    quoteBox.textContent = rose[idx];
    idx = idx + 1;
  } else {
    quoteBox.textContent = rose[idx];
    console.log("idx", idx);
    let flower = document.querySelector(`#flower${idx}`);

    flower.style.display = "flex";
    idx = idx + 1;
    if (idx === 5) {
      btn.textContent = "Clear to bloom more";
      idx = 0;
    }
  }
};

btn.addEventListener("click", () => handleQuote());
