document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button");
  const elements = document.querySelectorAll(".title, .text");

  button.addEventListener("click", function () {
    createHeart();
    animateText();
  });

  function createHeart() {
    const heart = document.createElement("img");
    heart.src = "images/lovehearts.png";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  function animateText() {
    elements.forEach((el) => {
      el.classList.add("animate");

      setTimeout(() => {
        el.classList.remove("animate");
      }, 4000);
    });
  }
});