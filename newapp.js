'use strict';

//global variables
//images of products (left, middle and right) click on any images to scroll threw products giving 
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');
var clickMe = document.getElementById('click-me');
//image text
var leftText = document.getElementById('left-text');
var middleText = document.getElementById('middle-text');
var rightText = document.getElementById('right-text');
var currentLeftImageIndex = 0;
var currentMiddleImageIndex = 1;
var currentRightImageIndex = 2;
// all images global variable
var allImages = [];
//click count
var clickCounter = 0;



//Create Constructor
var ProductImages = function(src, name){
    this.src = src;
    this.name = name;
    this.likes = 0;
    this.appeared = 0;
    allImages.push(this);
};

//Prototypes 
ProductImages.prototype.renderImage = function(){
    imageLeft.src = this.src;
    imageMiddle.src = this.src;
    imageRight.src = this.src;
};
ProductImages.prototype.renderImageClicks = function(){
    var listLikes = document.getElementById('listLikes');
    var liElement = document.createElement('li');
    liElement.textContent = `${this.name} was clicked ${this.likes}.`
    listLikes.appendChild(liElement);
};

var likedList = function(){
    for(var i =0; i < allImages.length; i++) {
        allImages[i].renderImageClicks();
    }
};


//click Handler and Listener
//When Images are clicked this will change the pictures and count the number of likes
var imageClicker = function (event) {
    console.log('here');
    if(event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right') {
        console.log('yo');
    }
    
    do {
        var randomNumberLeft = Math.floor(Math.random() * allImages.length)
    } while (randomNumberLeft === currentLeftImageIndex || randomNumberLeft === currentMiddleImageIndex || randomNumberLeft === currentRightImageIndex);
    do {
        var randomNumberMiddle = Math.floor(Math.random() * allImages.length)
    } while (randomNumberMiddle === currentLeftImageIndex || randomNumberMiddle === currentMiddleImageIndex || randomNumberMiddle === currentRightImageIndex);
    do {
        var randomNumberRight = Math.floor(Math.random() * allImages.length)
    } while (randomNumberRight === currentRightImageIndex || randomNumberRight === currentLeftImageIndex || randomNumberRight === currentMiddleImageIndex);
    
    //increment the clicks on each picture
    if (event.target.id === 'left'){
        allImages[currentLeftImageIndex].likes++;
        console.log('clicked left');
    } else if (event.target.id === 'middle') {
        allImages[currentMiddleImageIndex].likes++
        console.log('clicked middle');
     } else {
        allImages[currentRightImageIndex].likes++;
        console.log('clicked right');
     }
    allImages[currentLeftImageIndex].appeared++;
    allImages[currentMiddleImageIndex].appeared++;
    allImages[currentRightImageIndex].appeared++;
    
    //not sure why I need this but let's try this out
    currentLeftImageIndex = randomNumberLeft;
        currentMiddleImageIndex = randomNumberMiddle;
        currentRightImageIndex = randomNumberRight;
        imageLeft.src = allImages[randomNumberLeft].src;
        imageMiddle.src = allImages[randomNumberMiddle].src;
        imageRight.src = allImages[randomNumberRight].src;
        leftText.textContent = allImages[randomNumberLeft].name;
        middleText.textContent = allImages[randomNumberMiddle].name;
        rightText.textContent = allImages[randomNumberRight].name;
        
        clickCounter++;
        console.log(clickCounter);
        if(clickCounter === 25){
            clickMe.removeEventListener('click', imageClicker);
            likedList();
        }
    
};

clickMe.addEventListener('click',imageClicker);

new ProductImages('./img/bag.jpg', 'bag');
new ProductImages('./img/banana.jpg', 'banana');
new ProductImages('./img/bathroom.jpg', 'bathroom');
new ProductImages('./img/boots.jpg', 'boots');
new ProductImages('./img/breakfast.jpg', 'breakfast');
new ProductImages('./img/bubblegum.jpg', 'bubblegum');
new ProductImages('./img/chair.jpg', 'chair');
new ProductImages('./img/cthulhu.jpg', 'cthulhu');
new ProductImages('./img/dog-duck.jpg', 'dog duck');
new ProductImages('./img/dragon.jpg', 'dragon');
new ProductImages('./img/pen.jpg', 'pen');
new ProductImages('./img/pet-sweep.jpg', 'pet-sweep');
new ProductImages('./img/scissors.jpg', 'scissors');
new ProductImages('./img/shark.jpg', 'shark');
new ProductImages('./img/sweep.png', 'sweep');
new ProductImages('./img/tauntaun.jpg', 'tauntaun');
new ProductImages('./img/unicorn.jpg', 'unicorn');
new ProductImages('./img/usb.gif','usb');
new ProductImages('./img/water-can.jpg', 'water-can');
new ProductImages('./img/wine-glass.jpg', 'wine-glass');
