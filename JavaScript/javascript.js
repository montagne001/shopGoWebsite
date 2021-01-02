function myOver(x) {
    $(x)[0].getElementsByClassName("subMenuContent")[0].setAttribute("style", "display:block");
}

function myOut(x) {
    $(x)[0].getElementsByClassName("subMenuContent")[0].setAttribute("style", "display:none");
}

function login() {
    document.getElementById("sectionStartS").setAttribute("style", "display:none");
    document.getElementById("bildTop").setAttribute("style", "display:none");
    document.getElementById("register").setAttribute("style", "display:none");
    document.getElementById("login").setAttribute("style", "display:block");
}

function register() {
    document.getElementById("sectionStartS").setAttribute("style", "display:none");
    document.getElementById("bildTop").setAttribute("style", "display:none");
    document.getElementById("login").setAttribute("style", "display:none");
    document.getElementById("register").setAttribute("style", "display:block");
}

function contentChange(menuLeft) {

    var m = menuLeft.getElementsByClassName("subMenuTop")[0].innerHTML;

    var bild = "background-image: url('bild/" + m + ".png')";
    document.getElementById("bildTop").setAttribute("style", bild)

    document.getElementById("articleTitel").innerHTML = m;

    document.getElementById("register").setAttribute("style", "display:none");
    document.getElementById("login").setAttribute("style", "display:none");
    document.getElementById("bildTop").setAttribute("style", "display:block");
    document.getElementById("sectionStartS").setAttribute("style", "display:block");
    var bild = "background-image: url('bild/" + m + ".png')";
    document.getElementById("bildTop").setAttribute("style", bild)
}