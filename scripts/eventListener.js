const firstImage = document.querySelector("img");

function switchImage() {
    let MySrc = firstImage.getAttribute("src");
    if (MySrc === "media/Joe Chin.png") {
        firstImage.setAttribute("src", "media/PJ.png");
    } else if (MySrc === "media/PJ.png") {
        firstImage.setAttribute("src", "media/Katy.png");
    } else {
        firstImage.setAttribute("src", "media/Joe Chin.png");
    }
};

firstImage.addEventListener("click", switchImage);
