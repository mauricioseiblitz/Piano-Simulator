const keySelected = document.querySelectorAll(".piano-keys .key");

console.log(keySelected);

let audio = new Audio("src/audio/a.wav");

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
});

document.addEventListener("keydown", (e) => {
        playSound(e.key);
        console.log(e.key + " esta usando o keydown");
});
