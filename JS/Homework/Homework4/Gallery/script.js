/**
 * Created by maksc on 25.07.2017.
 */
var review = document.querySelector(".review>img");
var image = document.querySelectorAll(".item__image");
for (var i = 0; i < image.length; i++) {
    image[i].onclick = function () {
        var attr = this.getAttribute("src");
        review.setAttribute("src", attr);
    }
}