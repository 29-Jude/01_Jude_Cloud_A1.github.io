// Add the 'resetFadeIn' function before other event listeners
function resetFadeIn() {
    const tankContents = document.querySelectorAll('.tank-content');
    tankContents.forEach(tankContent => {
        tankContent.classList.remove('fade-in');
    });
}

//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
var allpages = document.querySelectorAll(".page");

const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

//select all subtopic pages
console.log(allpages);
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
hideall();

function show(pgno) { //function to show selected page no
    hideall();
    resetFadeIn();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () { show(1); });

page2btn.addEventListener("click", function () { show(2); });

page3btn.addEventListener("click", function () { show(3); });

page4btn.addEventListener("click", function () { show(4); });

page5btn.addEventListener("click", function () { show(5); });

page6btn.addEventListener("click", function () { show(6); });

menuBtn.addEventListener('click', () => { navList.classList.toggle('show'); menuBtn.classList.toggle('open'); });

/*for hamMenu to trigger dropdown*/
menuBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() { /*open and close menu*/
    if (menuItemsList.style.display == "block")
        menuItemsList.style.display = "none";
    else menuItemsList.style.display = "block";
}

document.addEventListener('scroll', function () {
    // Get all elements with the class 'tank-content'
    const tankContents = document.querySelectorAll('.tank-content');

    // Loop through each 'tank-content' element
    tankContents.forEach(tankContent => {
        const topPosition = tankContent.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Check if the element is in view
        if (topPosition < viewportHeight * 0.7) {
            tankContent.classList.add('fade-in');
        }
    });
});

const tankElement = document.querySelector('.tankInteractable');
const tankSpeed = 15;

// Function to move the tank left
function moveLeft() {
    tankElement.classList.add('flip-horizontal');
    const currentLeft = parseFloat(getComputedStyle(tankElement).left);
    const containerWidth = document.documentElement.clientWidth; // Get the width of the container
    const newLeft = currentLeft - tankSpeed;

    const minLeft = 0;

    if (newLeft >= minLeft) {
        tankElement.style.left = newLeft + 'px';
    }
}

// Function to move the tank right
function moveRight() {
    tankElement.classList.remove('flip-horizontal');
    const currentLeft = parseFloat(getComputedStyle(tankElement).left);
    const containerWidth = document.documentElement.clientWidth;
    const tankWidth = tankElement.clientWidth;
    const newLeft = currentLeft + tankSpeed;

    const maxLeft = containerWidth - tankWidth;

    if (newLeft <= maxLeft) {
        tankElement.style.left = newLeft + 'px';
    }
}

// Event listener for keyboard events
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
});