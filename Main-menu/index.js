const regex = /^[A-Za-z]*$/;
let dialog = document.querySelector("#dialog");
let input = document.querySelector("#login-panel > input");

document.querySelector("#login-panel > input").addEventListener('input', function() {
    while (!regex.test(this.value)){
        if (!regex.test(this.value)) {
            this.value = this.value.replace(/[^A-Za-z]/, '');
        }
    }
});

document.querySelector("#login-panel > button").addEventListener('click', function() {
    if(input.value === ""){
        return;
    }
    dialog.style.display = "flex";
    dialog.style.animationName = "smooth-appearing";
    dialog.style.animationDuration = "0.15s";
    dialog.style.animationIterationCount = "1";
    dialog.style.animationDirection =  "normal";
});

document.getElementById("close").addEventListener('click', function() {
    dialog.style.animationName = "smooth-disappearing";
    dialog.style.animationDuration = "0.15s";
    dialog.style.animationIterationCount = "1";
    dialog.style.animationDirection =  "normal";
    dialog.addEventListener('animationend', function() {
        if (dialog.style.animationName === "smooth-disappearing"){
            dialog.style.display = "none";
        }
    });

});

