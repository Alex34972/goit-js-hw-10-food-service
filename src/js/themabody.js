const themeControl = document.querySelector(`.theme-switch__toggle`);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const darkTheme = () => {
  document.body.classList.add(`${Theme.DARK}`);
  document.body.classList.remove(`${Theme.LIGHT}`);
};
const lightTheme = () => {
  document.body.classList.add(`${Theme.LIGHT}`);
  document.body.classList.remove(`${Theme.DARK}`);
};
themeControl.addEventListener(`change`, onSwitchTheme);
function onSwitchTheme() {
  if (!themeControl.checked) {
    lightTheme();
    localStorage.setItem("Theme", Theme.LIGHT);
    return;
  }
  darkTheme();
  localStorage.setItem("Theme", Theme.DARK);
}
const localStorageValue = localStorage.getItem("Theme");

if (localStorageValue === `${Theme.LIGHT}`) {
  lightTheme();
} else {
  darkTheme();
  themeControl.checked = true;
}
