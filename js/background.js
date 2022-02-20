const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

paintImg = `img/${chosenImage}`
const url =  "url(" + paintImg + ")";
document.body.style.backgroundImage = url;


