console.log("loaded js script successfully");

function clickLink(e) {
    console.log("e.target.innerHTML");

    alert("I'm going to take you to " + e.target.innerHTML);
}
function focusButton(e) {
    e.target.style.backgroundColor = "#bde0fe";
}
function leaveFocusButton(e) {
    e.target.style.backgroundColor = "#ffffff";
}
function clickButton(e) {
    let button = e.target;
    button.innerHTML = "Clicked";
}

let list = document.getElementsByTagName('ul')[0];

let anchors = document.getElementsByTagName('a');
for (let i = 0; i < anchors.length; i++){
    anchors = anchors[i];
    anchors.addEventListener('click', clickLink, false);
}
let button = document.getElementsByTagName('button');
for (let i = 0; i < button.length; i++){
    button = button[i];
    button.addEventListener('mouseover', focusButton, false);
    button.addEventListener('mouseout', leaveFocusButton, false);
    button.addEventListener('click', clickButton, false);
}

let firstItem = document.getElementsByTagName('li')[0]
let firstItemLink = firstItem.firstChild.nextSibling;
// console.log(firstItemLink);
firstItemLink.href = "https://www.google.com/";