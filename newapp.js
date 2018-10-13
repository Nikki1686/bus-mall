'use strict'

//global variables
//images of products (left, middle and right) click on any images to scroll threw products giving 
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');
var clickMe = document.getElementById('click-me');
var currentLeftImageIndex = 0;
var currentMiddleImageIndex = 1;
var currentRightImageIndex = 2;
// all images global variable
var allImages = [];

//Create Constructor
var productImages = function(src, name){
    this.src = src;
    this.name = name;
    this.likes = 0;
    this.appeared = 0;
    allImages.push(this);
}

//prototypes for image products


//click Handler and Listener
//When Images are clicked this will change the pictures and count the number of likes
var imageClicker = function (event) {
    console.log('here');
    if(event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right') {
        console.log('yo');

//will go through random numbers to except for last number chosen to show a different image on the screen
do {
    var randomNumberLeft = Math.floor(Math.random() * allImages.length)
} while (randomNumberLeft === currentLeftImageIndex || randomNumberLeft === currentMiddleImageIndex || randomNumberLeft === currentRightImageIndex);
do {
    var randomNumberMiddle = Math.floor(Math.random() * allImages.length)
} while (randomNumberMiddle === currentMiddleImageIndex || randomNumberMiddle === currentLeftImageIndex || randomNumberMiddle === currentRightImageIndex);
do {
    var randomNumberRight = Math.floor(Math.random() * allImages.length)
} while (randomNumberRight === currentRightImageIndex || randomNumberRight === currentLeftImageIndex || randomNumberRight === currentMiddleImageIndex);
//not sure why I need this but let's try this out
currentLeftImageIndex = randomNumberLeft;
currentMiddleImageIndex = randomNumberMiddle;
currentRightImageIndex = randomNumberRight;
imageLeft.src = allImages[randomNumberLeft].src;
imageMiddle.src = allImages[randomNumberMiddle].src;
imageRight.src = allImages[randomNumberRight].src;
}
//should actually be able to click through pictures
clickMe.addEventListener('click',imageClicker);
};
//should choose random image
imageClicker();


//images that will push into the constructor
new productImages('./img/bag.jpg');
new productImages('.img/banana.jpg');
new productImages('./img/bathroom');
new productImages('./img/boots.jpg');
new productImages('./img/boots.jpg');
new productImages('./img/breakfast.jpg');
new productImages('./img/bubblegum.jpg');
new productImages('./img/chair/jpg');
new productImages('./img/cthulhu.jpg');
new productImages('./img/dog-duck.jpg');
new productImages('./img/dragon.jpg');
new productImages('./img/pen.jpg');
new productImages('./img/pet-sweep.jpg');
new productImages('./img/scissors.jpg');
new productImages('./img/shark.jpg');
new productImages('./img/sweep.jpg');
new productImages('./img/tauntaun.jpg');
new productImages('./img/unicorn.jpg');
new productImages('./img/usb.gif');
new productImages('./img/water-can');
new productImages('./img/wine-glass.jpg');