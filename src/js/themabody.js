
const themeControl =document.querySelector(`.theme-switch__toggle`);
themeControl.addEventListener(`change`,onSwitchTheme);
function onSwitchTheme(){
    if (!themeControl.checked) {
        document.body.classList.add(`light-theme`)
        document.body.classList.remove(`dark-theme`);         
    }else{
        document.body.classList.add(`dark-theme`);
        document.body.classList.remove(`light-theme`)}
};