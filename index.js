function myFunction() {
    var dots = document.getElementById("dots-container");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "flex";
        btnText.innerHTML = "بیشتر";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "کمتر";
        moreText.style.display = "inline";
    }
}