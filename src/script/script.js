var list = document.getElementsByClassName("display");

var delay = 0;

for (var i = 0; i < list.length; ++i) {
    list[i].style.animationDelay = delay + 's';
    delay += 0.08;
}