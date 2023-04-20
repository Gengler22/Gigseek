const mosaic = document.querySelector(".maps-container");
const unsplashURL = "https://source.unsplash.com/random/performer";

const ranks = 4;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
document.getElementById("VenueImageHolder").onload = function () {
    generateImage();
}
*/

for (let i = 0; i < ranks * 3; i++) {
    const img = document.createElement("div");
    console.log(generatePerformerImage())
    img.className = "picture1"
    mosaic.appendChild(img);
    generatePerformerImage();
}

function generatePerformerImage() {

    var blocks = document.getElementsByClassName("picture1");
    var i;

    for (i = 0; i < blocks.length; i++) {

        var retvalue = randomIntFromInterval(1, 30);

        var repImage = '<img src="';

        if (retvalue == 1) {

            repImage += '../assets/img/PerformerImages/img1.jpg">';
        } else if (retvalue == 2) {

            repImage += '../assets/img/PerformerImages/img2.jpg">';
        } else if (retvalue == 3) {

            repImage += '../assets/img/PerformerImages/img3.jpg">';
        } else if (retvalue == 4) {

            repImage += '../assets/img/PerformerImages/img4.jpg">';
        } else if (retvalue == 5) {

            repImage += '../assets/img/PerformerImages/img5.jpg">';
        } else if (retvalue == 6) {

            repImage += '../assets/img/PerformerImages/img6.jpg">';
        } else if (retvalue == 7) {

            repImage += '../assets/img/PerformerImages/img7.jpg">';
        } else if (retvalue == 8) {

            repImage += '../assets/img/PerformerImages/img8.jpg">';
        } else if (retvalue == 9) {

            repImage += '../assets/img/PerformerImages/img9.jpg">';
        } else if (retvalue == 10) {

            repImage += '../assets/img/PerformerImages/img10.jpg">';
        } else if (retvalue == 11) {

            repImage += '../assets/img/PerformerImages/img11.jpg">';
        } else if (retvalue == 12) {

            repImage += '../assets/img/PerformerImages/img12.jpg">';
        } else if (retvalue == 13) {

            repImage += '../assets/img/PerformerImages/img13.jpg">';
        } else if (retvalue == 14) {

            repImage += '../assets/img/PerformerImages/img14.jpg">';
        } else if (retvalue == 15) {

            repImage += '../assets/img/PerformerImages/img15.jpg">';
        } else if (retvalue == 16) {

            repImage += '../assets/img/PerformerImages/img16.jpg">';
        } else if (retvalue == 17) {

            repImage += '../assets/img/PerformerImages/img17.jpg">';
        } else if (retvalue == 18) {

            repImage += '../assets/img/PerformerImages/img18.jpg">';
        } else if (retvalue == 19) {

            repImage += '../assets/img/PerformerImages/img19.jpg">';
        } else if (retvalue == 20) {

            repImage += '../assets/img/PerformerImages/img20.jpg">';
        } else if (retvalue == 21) {

            repImage += '../assets/img/PerformerImages/img21.jpg">';
        } else if (retvalue == 22) {

            repImage += '../assets/img/PerformerImages/img22.jpg">';
        } else if (retvalue == 23) {

            repImage += '../assets/img/PerformerImages/img23.jpg">';
        } else if (retvalue == 24) {

            repImage += '../assets/img/PerformerImages/img24.jpg">';
        } else if (retvalue == 25) {

            repImage += '../assets/img/PerformerImages/img25.jpg">';
        } else if (retvalue == 26) {

            repImage += '../assets/img/PerformerImages/img26.jpg">';
        } else if (retvalue == 27) {

            repImage += '../assets/img/PerformerImages/img27.jpg">';
        } else if (retvalue == 28) {

            repImage += '../assets/img/PerformerImages/img28.jpg">';
        } else if (retvalue == 29) {

            repImage += '../assets/img/PerformerImages/img29.jpg">';
        } else {

            repImage += '../assets/img/PerformerImages/img30.jpg">';
        }

        blocks[i].innerHTML = repImage;
    }
}



function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
