console.log("Myth-Ink JS loaded");

const slidesContainer = document.getElementById("slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const homeBtn = document.getElementById("homeBtn");

function updateDots() {
  const index = Math.round(
    slidesContainer.scrollTop / window.innerHeight
  );

  dots.forEach(dot => dot.style.background = "#555");

  if (dots[index]) {
    dots[index].style.background = "#d4af37";
  }
}

slidesContainer.addEventListener("scroll", updateDots);

homeBtn.addEventListener("click", () => {
  slidesContainer.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* INIT */
updateDots();
