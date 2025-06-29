window.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");
  message.style.opacity = 0;
  message.style.transform = "translateY(20px)";

  setTimeout(() => {
    message.style.transition = "all 1s ease";
    message.style.opacity = 1;
    message.style.transform = "translateY(0)";
  }, 500);

  document.getElementById("reveal-button").addEventListener("click", () => {
    document.getElementById("secret").classList.remove("hidden");
  });

  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const heartContainer = document.querySelector(".heart-container");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartContainer.appendChild(heart);
  }
});

document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  heart.style.opacity = 1;
  heart.style.transition = "all 1s ease-out";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = (e.pageY - 50) + "px";
    heart.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    document.body.removeChild(heart);
  }, 1000);
});


