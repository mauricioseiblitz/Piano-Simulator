const keySelected = document.querySelectorAll(".piano-keys .key");

console.log(keySelected);

let audio = new Audio("src/audio/a.wav");

const playSound = (key) => {
    //audio.currentTime = 0;
    audio.src = `src/audio/${key}.wav`;
    audio.play();
};

// for(let i = 0; i < keySelected.length; i++) {
//     console.log(keySelected[i]);
// }

keySelected.forEach((key) => {
    key.addEventListener("click", () => {
        console.log(key.dataset.key);
        playSound(key.dataset.key);
    });
});