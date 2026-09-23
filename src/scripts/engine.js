const keySelected = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");
const checkedKeys = document.querySelector(".keys-check input");

let audio = new Audio("src/audio/a.wav");
let mappedKeys = [];

const playSound = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.play();

    const keyPressed = document.querySelector(`[data-key="${key}"]`);

    keyPressed.classList.add("active");
    setTimeout(() => {
    keyPressed.classList.remove("active");
    }, 150);
};

keySelected.forEach((key) => {
    key.addEventListener("click", () => {
        console.log(key.dataset.key);
        playSound(key.dataset.key);
    });

    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)) {
        playSound(e.key);
    }
});

volume.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

checkedKeys.addEventListener("click", () => {
    keySelected.forEach(key => key.classList.toggle("hide"));
}); 