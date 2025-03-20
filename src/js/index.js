//Loading the containers with a delay and stylistic effect
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

//Changes the profile picture when hovered
document.addEventListener("DOMContentLoaded", function () {
  const quisPicture = document.querySelector(".quis-picture");

  quisPicture.addEventListener("mouseover", function () {
    this.src = "/assets/images/quis-silly.svg";
  });

  quisPicture.addEventListener("mouseout", function () {
    this.src = "/assets/images/Founder.webp";
  });
});

//Adds a typing animation to the title
document.addEventListener("DOMContentLoaded", function () {
  const animatedTitle = document.getElementById("animated-title");
  animatedTitle.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
      animatedTitle.style.width = "auto";
      animatedTitle.parentElement.style.justifyContent = "center";
    }
  });
});

//Adds a typing animation to the title
document.addEventListener("DOMContentLoaded", function () {
  const animatedTitle = document.getElementById("animated-title");

  animatedTitle.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
      animatedTitle.style.overflow = "visible";
      animatedTitle.style.whiteSpace = "normal"; // Allow wrapping if needed
    }
  });
});

//Goes to the home page when the scroll indicator is clicked
document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  scrollIndicator.addEventListener("click", function () {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(function () {
      window.location.href = "/src/html/home.html";
    }, 500);
  });
});

//Scrolls to the tech section when the tech button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const techButton = document.querySelector("a[href='#tech']");

  techButton.addEventListener("click", function () {
    event.preventDefault();
    const techSection = document.getElementById("tech");
    techSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//Scrolls to the project section when the project button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const techButton = document.querySelector("a[href='#projectz']");

  techButton.addEventListener("click", function () {
    event.preventDefault();
    const techSection = document.getElementById("projectz");
    techSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//Goes to the about page when the about button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.querySelector(
    "a[href='/src/html/aboutme.html']"
  );

  aboutButton.addEventListener("click", function () {
    event.preventDefault();
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(function () {
      window.location.href = "/src/html/aboutme.html";
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(
    "a[href='/src/html/contacts.html']"
  );

  contactButton.addEventListener("click", function () {
    event.preventDefault();
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(function () {
      window.location.href = "/src/html/contacts.html";
    }, 500);
  });
});
