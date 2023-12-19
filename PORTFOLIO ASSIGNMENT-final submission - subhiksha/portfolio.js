window.onload = pageReady;

function pageReady() {

    let mode = 0;
    let btn = document.getElementById("mode");
    btn.addEventListener("click", changeBg);

    function changeBg() {

        if (mode == 0) {

    document.getElementById("mypfdiv").style.backgroundImage = "url(nightmode-home.png)";
    document.getElementById("aboutmee").style.backgroundImage = "url(nightmode-plain.png)";
    document.getElementById("projects").style.backgroundImage = "url(nightmode-plain.png)";
    document.getElementById("contact").style.backgroundImage = "url(nightmode-plain.png)";

    mode = 1;
}
else {

    document.getElementById("mypfdiv").style.backgroundImage = "url(bg1.png)";
    document.getElementById("aboutmee").style.backgroundImage = "url(bg2.png)";
    document.getElementById("projects").style.backgroundImage = "url(flipped.png)";
    document.getElementById("contact").style.backgroundImage = "url(bg2.png)";

    mode = 0;

}

}
}