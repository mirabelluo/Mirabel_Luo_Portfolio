const message = "Hi, I'm Mirabel, and this is what's in my bag (portfolio)...";
const typeTarget = document.getElementById("typewriter");
const bagImage = document.querySelector(".bag-image");
const navButtons = document.querySelector(".nav-buttons");
const buttons = navButtons.querySelectorAll("button");

let i = 0;

function typeWriter() {
  if (i < message.length) {
    typeTarget.innerHTML += message.charAt(i);
    i++;

    if (message.slice(0, i).includes("what's in my bag") && !bagImage.classList.contains("show")) {
      bagImage.classList.remove("hidden");
      bagImage.classList.add("show");
    }

    setTimeout(typeWriter, 50);
  } else {
    navButtons.classList.remove("hidden");
    navButtons.classList.add("show");
    revealButtons();
  
    // Show about blurb after buttons animate
    setTimeout(() => {
      const aboutBlurb = document.getElementById("about-blurb");
      aboutBlurb.classList.add("show");
    }, 500); // wait just a bit for nav buttons to fade in
  }  
}

function revealButtons() {
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.animationDelay = `${index * 0.1}s`;
      btn.style.animation = "fadeInUp 0.6s ease forwards";
    }, index * 100);
  });
}

window.onload = typeWriter;

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function comingSoon() {
    alert("🧵 This page needs a little mending — I promise I'm not procrastinating...check back soon!");
  }
  