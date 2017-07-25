/**
 * Created by maksc on 25.07.2017.
 */
var position = 0;
var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");
var box = document.querySelector(".box");

rightArrow.onclick = function () {
    if (position > -400) {
        position -= 200;
        box.style.left = position + 'px';
    }
}

leftArrow.onclick = function () {
    if (position < 0) {
        position += 200;
        box.style.left = position + 'px';
    }
}