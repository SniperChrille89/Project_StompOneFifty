// TOGGLE NAVBAR (Unfortunately just a copy-paste from the navbar-exercise with
// slightly different design configurations)

function navToggle() {
        
    var x = document.getElementById("navBar");

    if (x.className === "navigationBar") {

        x.className += " dropmenu";

    }

    else {

        x.className = "navigationBar";

    }

}



// POP MESSAGE WINDOW/MODAL BOX (Semi-copied from W3Schools with slight modifications to suit my needs plus
// a function that checks if the form is filled properly before submit)

var popWindow = document.getElementById('popUp');       //Gets popUp-ID from the DIV
var button = document.getElementById('button');         //Gets button-ID from submit
var span = document.getElementsByClassName('close')[0]; //Gets classname from &times; element
var form = document.getElementById('form');             //Gets form ID from the html form
var inputs = form.getElementsByTagName('input');        //Gets input tags!!


button.onclick = function(event) {                      //This onclick function sets of an event(preventDefault)
                                                        //so that the page wont refresh until "close" is clicked later on
    for (var i = 0; i < inputs.length; i++) {           //Forloop that checks if all form fields with the required-attribute is filled

        if (inputs[i].hasAttribute("required")) {

            if (inputs[i].value == "") {

                alert("Please fill all the fields!");
                return false;

            }
        }
    }

    popWindow.style.display = "block";                  //If the fields are correctly filled this modal box appears
    console.log("SHOW");
    event.preventDefault();                             //Prevents the submit-action to happen and refresh the page...

}                                                       //until...

span.onclick = function() {                             //this function is executed!

    popWindow.style.display = "none";
    console.log("HIDE");
    form.submit();

}



