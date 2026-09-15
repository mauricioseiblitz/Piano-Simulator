const keySelected = document.querySelectorAll(".piano-keys .key");


console.log(keySelected);

// for(let i = 0; i < keySelected.length; i++) {
//     console.log(keySelected[i]);
// }

keySelected.forEach((key) => {
    console.log(key.dataset.key);
});