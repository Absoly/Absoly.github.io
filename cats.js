"use-strict"
var image = document.getElementById("image")
function download() {
    console.log("hello");
    
}
function choose_image(selector) {
    var src = selector.options[selector.selectedIndex].value
    if (!(image.src == src))
        image.src = src
}