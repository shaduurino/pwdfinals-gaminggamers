
function acceptFriends() { // function to uncheck any checked boxes once submit button is clicked on

    var friendscheckbox = document.getElementsByClassName("new-friends");
    var checkedcheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;

    if (checkedcheckboxes > 0) {

        for (var i = 0; i < friendscheckbox.length; i++) { 
            friendscheckbox[i].checked = false;
        }

        alert("Friend request accepted. Have fun being friends!");

    }

    else {
        alert("You have not selected any friends to accept, please try again.");
    }

}

function carouselLeft() { // goes to the previous image when clicked on 
    let active = document.querySelector(".displayImage.active");
    let next = active.previousElementSibling;
    if(!next) next = document.getElementById("store_images").lastElementChild;
    active.classList.remove('active');
    next.classList.add('active');
    displayInfo();
}

function carouselRight() { // goes to the next image when clicked on 
    let active = document.querySelector(".displayImage.active");
    let next = active.nextElementSibling;
    if(!next) next = document.getElementById("store_images").firstElementChild;
    active.classList.remove('active');
    next.classList.add('active');
    displayInfo();
}

function displayCard(name) { // changes the active class for the element that will be displayed next 
    let active = document.querySelector(".displayImage.active");
    let next = document.querySelector(`.displayImage[data-gameName="${name}"]`);
    active.classList.remove('active');
    next.classList.add('active');
    displayInfo();
}

function displayInfo() { // gets the information stored within custom attributes in the image and changes inner.html to display it + formatting for stars
    let active = document.querySelector(".displayImage.active");
    document.getElementById("gameName").innerHTML = active.getAttribute("data-gameName");
    document.getElementById("gameDescription").innerHTML = active.getAttribute("data-gameDescription");
    let stars = active.getAttribute("data-gameStars");
    stars = parseInt(stars);
    if(!stars || stars < 0 || stars > 5) stars = 0;
    let txtStars = "";

    for(let i = 0; i < stars; i++) txtStars += "&#9733;";
    for(let j = 0; j < 5-stars; j++) txtStars += "&#9734;";
    
    document.getElementById("gameStars").innerHTML = txtStars;
}

function purchasePage () { // links to billing page

    location.replace("billing.html");

}

function show_alert() { // alerts the user when the play game button is clicked on
    alert("Your game is starting soon.");
}

function logInAlert() { // alerts the user they have successfully logged in and redirects them to the store page

    alert("You have successfully logged in. You'll be redirected to the store shortly.");
    location.replace("store.html");

}

function registerAccount() { // alerts the user they have successfully registered and redirects them to the store page

    alert("You have successfully registed an account. You'll be redirected to the store shortly.");
    location.replace("store.html");

}