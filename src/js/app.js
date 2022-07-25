//функция проверки на web-p
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


//класс для создания списка песен
import SoundList from "./modules/sound-list.js";


//импорт списков песен
import { arrayHipHopList } from "./modules/hip-hop-list.js";
import { arrayPopList } from "./modules/pop-list.js";


//импорт массивов песен
import { audioHipHopArray } from "./modules/hip-hop-array.js";
import { audioPopArray } from "./modules/pop-array.js";


//импорт функции удаления списка песен
import removeSoundList from "./modules/remove-sound-list.js"


//импорт функции воспроизведения
import playSound from "./modules/function-play-sound.js";


//импорт функций нот
import showNote from "./modules/note.js";
import moveNote from "./modules/move-note.js";
import stopNote from "./modules/stop-note.js";


//кнопки Play и Stop
const buttonPlay = document.querySelector('.button-play');
const buttonStop = document.querySelector('.button-stop');


//импорт функции показа типа пластинки
import showTypeOfRecord from "./modules/type-of-record.js";

//импорт функции активных кнопок
import showActiveButtonType from "./modules/focus-type-button.js";

//воспроизведение по умолчанию (хип-хоп)
buttonPlay.addEventListener("click", function () {
    startRecordAnimation();
    playSound(audioHipHopArray);
    showNote();
    moveNote();
    showTypeOfRecord('Hip-Hop');
});

buttonPlay.addEventListener("click", function () {
    new SoundList(arrayHipHopList);
}, { once: true });

buttonStop.addEventListener("click", function () {
    stopAnimation();
    stopSound();
    stopNote();
});


//хип-хоп лист воспроизведение
document.getElementById('hip-hop').addEventListener('click', ()=> {
    buttonPlay.addEventListener('click', () => {
        startRecordAnimation();
        playSound(audioHipHopArray);
        showNote();
        moveNote();
        showTypeOfRecord('Hip-Hop');
    });

    buttonPlay.addEventListener('click', () => {
        removeSoundList();
        new SoundList(arrayHipHopList);
    });
});



//поп лист воспроизведение
const buttonPop = document.getElementById('pop');
buttonPop.addEventListener("click", () => {
    showActiveButtonType();

    buttonPlay.addEventListener("click", function () {
        startRecordAnimation();
        playSound(audioPopArray);
        showNote();
        moveNote();
        showTypeOfRecord('Pop');
    });

    buttonPlay.addEventListener("click", function () {
        removeSoundList();
        new SoundList(arrayPopList);
    }, { once: true });
});


//Анимация пластинки и нот
const recordBody = document.querySelector('.record__body');

function startRecordAnimation() {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };
};


function stopAnimation() {
    if (recordBody.classList.contains('record-play')) {
        recordBody.classList.remove('record-play');
        recordBody.classList.add('record-rotate');
    }
}


function stopSound() {
    let player = document.getElementById('player');
    player.pause();
};
