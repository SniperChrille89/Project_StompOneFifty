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

// PARALLAX SCROLLING

$('.parllax-window').parallax({imageSrc: '/media/img/BG-01.jpg'});

