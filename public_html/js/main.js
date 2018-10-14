// TOGGLE NAVBAR

function navToggle() {
        
    var x = document.getElementById("navBar");

    if (x.className === "navigationBar") {

        x.className += " dropmenu";

    }

    else {

        x.className = "navigationBar";
    }

}


// POP MESSAGE WINDOW



var popWindow = document.getElementById('popUp');

var button = document.getElementById('button');

var span = document.getElementsByClassName('close')[0];

button.onclick = function() {

    popWindow.style.display = "block";

}

span.onclick = function() {

    popWindow.style.display = "hidden";

}