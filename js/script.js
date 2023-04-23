

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("song");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        if (x[i].className.indexOf(c) > -1) {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll(".btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.querySelector(".active");
            if (current) {
                current.classList.remove("active");
            }
            this.classList.add("active");
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});
