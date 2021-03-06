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
if (localStorage.getItem('allProductsLiked')) {
    var allImages = JSON.parse(localStorage.getItem('allProductsLiked'));
} else {
    var allImages = [];
}
//click count
if (localStorage.getItem('counter')) {
    var clickCounter = JSON.parse(localStorage.getItem('counter'));
} else {
    var clickCounter = 0;
}

//Create Constructor
var ProductImages = function (src, name) {
    this.src = src;
    this.name = name;
    this.likes = 0;
    this.appeared = 0;
    allImages.push(this);
};

//Prototypes 
ProductImages.prototype.renderImage = function () {
    imageLeft.src = this.src;
    imageMiddle.src = this.src;
    imageRight.src = this.src;
};
ProductImages.prototype.renderImageClicks = function () {
    var listLikes = document.getElementById('listLikes');
    var liElement = document.createElement('li');
    liElement.textContent = `${this.name} was clicked ${this.likes}.`
    listLikes.appendChild(liElement);
};

var likedList = function () {
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].renderImageClicks();
    }
};

//click Handler and Listener
//When Images are clicked this will change the pictures and count the number of likes
var imageClicker = function (event) {
    if (event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right') {
    }

    do {
        var randomNumberLeft = Math.floor(Math.random() * allImages.length)
    } while (randomNumberLeft === currentLeftImageIndex || randomNumberLeft === currentMiddleImageIndex || randomNumberLeft === currentRightImageIndex);
    do {
        var randomNumberMiddle = Math.floor(Math.random() * allImages.length)
    } while (randomNumberMiddle === currentLeftImageIndex || randomNumberMiddle === currentMiddleImageIndex || randomNumberMiddle === currentRightImageIndex || randomNumberMiddle === randomNumberLeft);
    do {
        var randomNumberRight = Math.floor(Math.random() * allImages.length)
    } while (randomNumberRight === currentRightImageIndex || randomNumberRight === currentLeftImageIndex || randomNumberRight === currentMiddleImageIndex || randomNumberRight === randomNumberLeft || randomNumberRight === randomNumberMiddle);

    //increment the clicks on each picture
    if (event.target.id === 'left') {
        allImages[currentLeftImageIndex].likes++;
    } else if (event.target.id === 'middle') {
        allImages[currentMiddleImageIndex].likes++
    } else {
        allImages[currentRightImageIndex].likes++;
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
    localStorage.setItem('allProductsLiked', JSON.stringify(allImages));
    if (clickCounter === 25) {
        clickMe.removeEventListener('click', imageClicker);
        renderChart();
    }
};

clickMe.addEventListener('click', imageClicker);

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
new ProductImages('./img/usb.gif', 'usb');
new ProductImages('./img/water-can.jpg', 'water-can');
new ProductImages('./img/wine-glass.jpg', 'wine-glass');

//============================================================

var ctx = document.getElementById('chart').getContext('2d');
//Add Chart

var renderChart = function () {
    var imageNames = [];
    var imageLikes = [];
    var imageShown = [];
    var colors = [];
    for (var i in allImages) {
        imageNames.push(allImages[i].name);
        imageLikes.push(allImages[i].likes);
        imageShown.push(allImages[i].appeared)
        colors.push('rgb(20, 83, 186)', 'rgb(61, 25, 160)', 'rgb(178, 12, 150)', 'rgb(107, 224, 144)', 'rgb(232, 116, 0)');
    }

    var chartData = {
        labels: imageNames,
        datasets: [{
            label: 'Number of Votes per Photo',
            data: imageLikes,
            backgroundColor: colors,
            borderWidth: 1,
        }],
    };

    var chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        animation: {
            duration: 1400,
        },
        responsive: true,
    };

    var barChart = {
        type: 'bar',
        data: chartData,
        options: chartOptions
    };
    //render the chart
    var chart = new Chart(ctx, barChart);
};
