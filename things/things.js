
document.getElementById("start-football").addEventListener('mouseenter', (e) => {
    let foundElem = document.getElementById("start-football-behind");
    e.target.style.transform = 'rotate(-30deg) translateX(-3rem)';
    e.target.style.transitionDuration = '1s';
    foundElem.style.transform = "rotate(360deg) translateY(-2.5rem) translateX(2.5rem)"
    foundElem.style.transitionDuration = "1s"
});

document.getElementById("start-football").addEventListener('mouseleave', (e) => {
    let foundElem = document.getElementById("start-football-behind");
    e.target.style.transform = 'rotate(0deg)';
    e.target.style.transitionDuration = '1s';
    foundElem.style.transform = "rotate(0deg) translateY(0) translateX(0)"
    foundElem.style.transitionDuration = "1s"
});

document.getElementById("start-football").addEventListener('click', (e) => {

});


document.getElementById("start-traffic-light").addEventListener('mouseenter', (e) => {
    let foundElem = document.getElementById("start-traffic-light-behind");
    e.target.style.transitionDuration = '1s';
    foundElem.style.transitionDuration = "1s";
    e.target.style.transform = 'translateY(3rem)';
    foundElem.style.transform = "translateY(-5rem)"
});

document.getElementById("start-traffic-light").addEventListener('mouseleave', (e) => {
    let foundElem = document.getElementById("start-traffic-light-behind");
    e.target.style.transitionDuration = '1s';
    foundElem.style.transitionDuration = "1s";
    e.target.style.transform = 'translateY(0)';
    foundElem.style.transform = "translateY(0)"
});

document.getElementById("start-books").addEventListener('mouseenter', (e) => {
    let foundElem = document.getElementById("start-books-behind");
    e.target.style.transform = 'rotate(-30deg) translateX(-3rem)';
    e.target.style.transitionDuration = '1s';
    foundElem.style.transform = "rotate(360deg) translateY(-2.5rem) translateX(2.5rem)"
    foundElem.style.transitionDuration = "1s"
});

document.getElementById("start-books").addEventListener('mouseleave', (e) => {
    let foundElem = document.getElementById("start-books-behind");
    e.target.style.transform = 'rotate(0deg)';
    e.target.style.transitionDuration = '1s';
    foundElem.style.transform = "rotate(0deg) translateY(0) translateX(0)"
    foundElem.style.transitionDuration = "1s"
});



