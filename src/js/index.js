document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".scroll-appear");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const quisPicture = document.querySelector(".quis-picture");

  quisPicture.addEventListener("mouseover", function () {
    this.src = "/assets/images/quis-silly.svg";
  });

  quisPicture.addEventListener("mouseout", function () {
    this.src = "/assets/images/Founder.webp";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedTitle = document.getElementById("animated-title");
  animatedTitle.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
      animatedTitle.style.width = "auto";
      animatedTitle.parentElement.style.justifyContent = "center";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedTitle = document.getElementById("animated-title");

  animatedTitle.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
      animatedTitle.style.overflow = "visible";
      animatedTitle.style.whiteSpace = "normal"; // Allow wrapping if needed
    }
  });
});
