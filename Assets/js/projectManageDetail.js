var index = 1;
changeImage = function() {
    var imgs = ["/Assets/img/slide1.jpg", "/Assets/img/slide2.jpeg", "/Assets/img/slide3.png"];
    document.getElementById('image').src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(changeImage, 2000);