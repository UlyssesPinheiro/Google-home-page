const settingsButton = document.querySelector(".settings-button");
const settingsContainer = document.querySelector(".settings-container");
const settingsLightModeIcon = document.querySelector(
  ".settings-light-mode-icon"
);
const settingsDarkModeIcon = document.querySelector(".settings-dark-mode-icon");

const settingsLastItem = document.querySelector(
  ".settings-container li:last-child"
);

const state = {
  darkMode: false,
  settingsShown: false,
};

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
