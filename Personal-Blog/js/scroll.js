document.onmouseover = function (e) {
    document.querySelector(".cursor").style.top = e.pageY - 10 + "px";
    document.querySelector(".cursor").style.left = e.pageX - 10 + "px";
    if (e.pageX < 260 && e.pageX > 190 && e.pageY < 520 && e.pageY > 120) {
        document.querySelector(".cursor").style.display = "none"
    } else {
        document.querySelector(".cursor").style.display = "block"
    }
}