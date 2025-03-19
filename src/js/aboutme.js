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

//Goes to the home page when the home button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.querySelector("a[href='/src/html/home.html']");

  homeButton.addEventListener("click", function () {
    event.preventDefault();
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(function () {
      window.location.href = "/src/html/home.html";
    }, 500);
  });
});
