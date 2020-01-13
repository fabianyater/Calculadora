//Change background image
const buttonTheme = document.getElementById('theme');
const backgroundh = document.querySelector('html');

buttonTheme.addEventListener('click', (e) => {
    backgroundh.style.backgroundSize = "cover";
    backgroundh.style.backgroundPosition = "center-center";
    backgroundh.style.backgroundRepeat = "repeat-y";
    let alea = Math.floor(Math.random() * (5 - 1)) + 1;
    switch (alea) {
        case 1:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/adeole_yosemite.jpg)';
            break;
        case 2:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/emcomeau_the_process.jpg)';
            break;
        case 3:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/evablue_jacques_cartier.jpg)';
            break;
        case 4:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/sezgin_being_different.jpg)';
            break;
        case 5:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/withluke_liberty_island.jpg)';
            break;
    }
});