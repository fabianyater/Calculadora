//Change background image
const buttonTheme = document.getElementById('theme');
const backgroundh = document.querySelector('html');

buttonTheme.addEventListener('click', (e) => {
    backgroundh.style.backgroundSize = "cover";
    backgroundh.style.backgroundPosition = "center-center";
    backgroundh.style.backgroundRepeat = "repeat-y";
    let alea = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log(alea);
    switch (alea) {
        case 1:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/adeole_yosemite-min.jpg)';
            break;
        case 2:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/emcomeau_the_process-min.jpg)';
            break;
        case 3:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/evablue_jacques_cartier-min.jpg)';
            break;
        case 4:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/sezgin_being_different-min.jpg)';
            break;
        case 5:
            backgroundh.style.backgroundImage = 'url(imgs/backgrounds/withluke_liberty_island-min.jpg)';
            buttonTheme.style.color = "black";
            break;
    }

    if (alea != 5) { buttonTheme.style.color = "white"; }
});