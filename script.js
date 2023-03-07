const tagButton = document.querySelector(".tagged");
const line = document.querySelector(".line-orig");
const postButton = document.querySelector(".posts-chooser");
const dropDownButton = document.querySelector(".arrow-down");
const popUp = document.querySelector(".pop-up");
const popUpLower = document.querySelector(".pop-up-lower");

let dropDownActive = false;


function lineRight() {
    line.className = "line-right";
    console.log('clicked');
}

function lineLeft() {
    line.className = "line";
    console.log('clicked');
}

function dropDown() {
    popUp.className = "pop-up-active";
    popUpLower.className = "pop-up-lower-active";
    console.log('dropDown')
}

function dropDownDeactivate() {
    popUp.className = "pop-up-deactive";
    popUpLower.className = "pop-up-lower-deactive";
    console.log('dropDownDeac')
}

tagButton.addEventListener('click', lineRight);
postButton.addEventListener('click', lineLeft);
dropDownButton.addEventListener('click', dropDown);
popUp.addEventListener('click', dropDownDeactivate);