const settingsButton = document.querySelector(".settings-button");
const settingsContainer = document.querySelector(".settings-container");
const settingsLightModeIcon = document.querySelector(
  ".settings-light-mode-icon"
);
const settingsDarkModeIcon = document.querySelector(".settings-dark-mode-icon");

const settingsLastItem = document.querySelector(
  ".settings-container li:last-child"
);

const searchForm = document.querySelector(".search-form");
const query = document.getElementById("query");
const googleSearchButton = document.querySelector(".google-search");
const googleLuckyButton = document.querySelector(".google-lucky");

const googleAppsContainerButton = document.querySelector(
  ".google-apps-container-button"
);
const gAppsContainer = document.querySelector(".g-apps-container");

const state = {
  darkMode: false,
  settingsShown: false,
};

function init() {
  query.value = "";
}
init();

settingsButton.addEventListener("click", (e) => {
  e.preventDefault;
  if (state.settingsShown === false) {
    settingsContainer.style.display = "flex";
    state.settingsShown = true;
  } else {
    settingsContainer.style.display = "none";
    state.settingsShown = false;
  }
});

googleAppsContainerButton.addEventListener("click", (e) => {
  console.log("clicked");
  gAppsContainer.style.display = "flex";
});

const showAndHideDarkLightTheme = function (e) {
  if (state.darkMode === false) {
    settingsLightModeIcon.style.display = "inline-block";
    settingsDarkModeIcon.style.display = "none";
  } else {
    settingsDarkModeIcon.style.display = "inline-block";
    settingsLightModeIcon.style.display = "none";
    state.darkMode = true;
  }
};

const hideDarkLightTheme = function () {
  settingsDarkModeIcon.style.display = "none";
  settingsLightModeIcon.style.display = "none";
};

settingsLastItem.addEventListener("mouseover", showAndHideDarkLightTheme);
settingsLastItem.addEventListener("mouseout", hideDarkLightTheme);
hideDarkLightTheme();

document.addEventListener("click", (e) => {
  if (e.target.closest(".settings-button") === settingsButton) return;
  if (e.target.closest(".settings-container") === settingsContainer) return;
  if (e.target.closest(".g-apps-container") === googleAppsContainerButton)
    return;
  if (
    e.target.closest(".google-apps-container-button") ===
    googleAppsContainerButton
  )
    return;

  gAppsContainer.style.display = "none";
  settingsContainer.style.display = "none";
  state.settingsShown = false;
});

settingsLastItem.addEventListener("click", (e) => {
  state.darkMode = !state.darkMode;
  hideDarkLightTheme();
  showAndHideDarkLightTheme();
  changeLightDarkMode();
});

function changeLightDarkMode() {
  document.querySelectorAll("*").forEach((e) => e.classList.toggle("darkmode"));
  //   document.body.classList.toggle("darkmode");
  //   document.querySelectorAll("a").forEach((e) => e.classList.toggle("darkmode"));

  //   document.querySelectorAll("p").forEach((e) => e.classList.toggle("darkmode"));
  //   document.querySelector(".ofered-in").classList.toggle("darkmode");
  //   document.querySelector("footer").classList.toggle("darkmode");
  if (state.darkMode === true) {
    document.querySelector(".dark-light-text").textContent = "Dark theme: ON";
  }
  if (state.darkMode === false) {
    document.querySelector(".dark-light-text").textContent = "Dark theme: OFF";
  }
}

function googleSearch(e) {
  e.preventDefault();
  console.log("search function called");
  window.location = "http://www.google.com/search?q=" + query.value;
}

function googleLucky(e) {
  // console.log("google lucky");
  e.preventDefault();
  window.location = `http://www.google.com/search?hl=en&q=${query.value}&btnI=I`;
}

searchForm.addEventListener("submit", googleSearch);

googleSearchButton.addEventListener("click", googleSearch);
googleLuckyButton.addEventListener("click", googleLucky);
