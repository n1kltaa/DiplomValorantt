document.addEventListener("DOMContentLoaded", function () {
  const languageIcon = document.getElementById("languageLogo");
  const miniWindow = document.getElementById("miniWindow");

  // Додаємо обробник події для кліку на іконку мови
  languageIcon.addEventListener("click", function () {
    // Додаємо або видаляємо клас 'active' однією командою toggle()
    miniWindow.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageIcon = document.getElementById("profileLogo");
  const miniWindow = document.getElementById("miniWindowProfile");

  // Додаємо обробник події для кліку на іконку мови
  languageIcon.addEventListener("click", function () {
    // Додаємо або видаляємо клас 'active' однією командою toggle()
    miniWindow.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageIcon = document.getElementById("btnOption");
  const miniWindow = document.getElementById("btnOption");

  // Додаємо обробник події для кліку на іконку мови
  languageIcon.addEventListener("click", function () {
    // Додаємо або видаляємо клас 'active' однією командою toggle()
    miniWindow.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageIcon = document.getElementById("btnOption");
  const miniWindow = document.getElementById("blockSelected");

  // Додаємо обробник події для кліку на іконку мови
  languageIcon.addEventListener("click", function () {
    // Додаємо або видаляємо клас 'active' однією командою toggle()
    miniWindow.classList.toggle("active");
  });
});

const characterSelect = document.getElementById("agent");

characterSelect.addEventListener("change", function () {
  const selectedCharacter = characterSelect.value;
  if (selectedCharacter) {
    window.location.href = selectedCharacter;
  }
});

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest(".burger")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".zagolovok2 h3");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".zagolovok3 h3");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".text_glavniy h3");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".agent_zogolovok_title");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".maps_zogolovok_title");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".weapon_zagolovok_title");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("load", function () {
  var element = document.querySelector(".intro__title");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("load", function () {
  var element = document.querySelector(".intro_image img");
  element.classList.add("appear");
});
