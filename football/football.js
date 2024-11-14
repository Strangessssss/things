let ball = document.getElementById('ball');
document.addEventListener("click", (e) => {
    let x = (e.clientX - ball.width / 2).toString() + "px";
    let y = (e.clientY - ball.height / 2).toString() + "px";

    if (e.clientX - ball.width / 2  <= 0){
        x = 0;
    }
    if (e.clientY - ball.height / 2  <= 0){
        y = 0;
    }

    if (e.clientX + ball.width / 2  >= window.innerWidth){
        x = (window.innerWidth - ball.width - 20).toString()  + "px";
    }
    if (e.clientY + ball.height / 2  >= window.innerHeight){
        y = (window.innerHeight - ball.height - 20).toString()  + "px";
    }

    ball.style.transform = `translate(${x}, ${y})`;

})