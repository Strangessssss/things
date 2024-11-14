


let shadowSetting = " 0 0 2rem 0.5rem"
let lights = document.querySelectorAll(".light")
let extinctColors = ["#5a0000", "#534f00", "#0b5100"]
let litColors = ["#FF0000", "#FFFF00", "#00FF00"]
let current = 0;

document.getElementById("next").addEventListener("click", () => {
    if(current === 3){
        current = 0;
    }
    for(let i = 0; i < 3; i++) {
        if(current === i) {
            lights[i].style.backgroundColor = litColors[i];
            lights[i].style.boxShadow = litColors[i] + shadowSetting;
        }
        else {
            lights[i].style.backgroundColor = extinctColors[i];
            lights[i].style.boxShadow = "transparent" + shadowSetting;
        }
    }
    current++;
})
