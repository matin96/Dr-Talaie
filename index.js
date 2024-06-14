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

function showMenu() {
    let list = document.getElementById("navList");
    if (list.style.display=== "block"){
        list.style.display= "none"
    } else list.style.display= "block"
    let header_cont = document.getElementById("home-cont")
    // header_cont.style.position = relative
    // header_cont.style.zIndex  = 999
}