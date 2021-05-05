const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const portfolioBtns = document.querySelectorAll('.portfolio__btn');

const projects = [
    {
        images: "",
        title: "Azul",
        subtitle: "Boardgame app",
        text: "The goal of this project is to create a digital version of the boardgame Azul (https://boardgamegeek.com/boardgame/230802/azul). Personal project, still a work in progress. Technologies used: CSS3, HTML5 and vanilla Javascript."
    },
    {
        images: "",
        title: "Todo",
        subtitle: "",
        text: ""
    },
];

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});