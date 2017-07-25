/**
 * Created by maksc on 25.07.2017.
 */
var menuBox =document.querySelector(".box");
var menuLineF = document.querySelector('.menu__line--first');
var menuLineS = document.querySelector('.menu__line--second');
var menuLineSr = document.querySelector('.menu__line--third');
var menuContainer = document.querySelector('.menu__container')

menuBox.onclick = function(){
    menuLineF.classList.toggle('menu__line--active');
    menuLineS.classList.toggle('menu__line--active');
    menuLineSr.classList.toggle('menu__line--active');
    menuContainer.classList.toggle('menu__container--active');
}
