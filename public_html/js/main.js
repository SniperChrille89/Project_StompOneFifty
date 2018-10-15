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
var form = document.getElementById('form');
var inputs = form.getElementsByTagName('input');


button.onclick = function(event) {

    for (var i = 0; i < inputs.length; i++) {

        if (inputs[i].hasAttribute("required")) {

            if (inputs[i].value == "") {

                alert("Please fill all the fields!");
                return false;

            }
        }
    }

    popWindow.style.display = "block";
    console.log("SHOW");
    event.preventDefault();

}

span.onclick = function() {

    popWindow.style.display = "none";
    console.log("HIDE");
    form.submit();

}



