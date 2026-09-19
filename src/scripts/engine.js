const keySelected = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");

console.log(keySelected);
console.log(volume);

let audio = new Audio("src/audio/a.wav");
let mappedKeys = [];

const playSound = (key) => {
    //audio.currentTime = 0;
    audio.src = `src/audio/${key}.wav`;
    audio.play();

    const keyPressed = document.querySelector(`[data-key="${key}"]`);
    console.log(keyPressed.textContent + " funcionou");

    keyPressed.classList.add("active");
    setTimeout(() => {
    keyPressed.classList.remove("active");
    }, 150);
};

// for(let i = 0; i < keySelected.length; i++) {
//     console.log(keySelected[i]);
// }

keySelected.forEach((key) => {
    key.addEventListener("click", () => {
        console.log(key.dataset.key);
        playSound(key.dataset.key);
    });

    mappedKeys.push(key.dataset.key);
});

console.log(mappedKeys);

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)) {
        playSound(e.key);
        console.log(e.key + " esta usando o keydown");
    }
});

document.addEventListener("input", (e) => {
    console.log(e.target.value);
    audio.volume = e.target.value;
});
