const firstImage = document.querySelector("img");

function switchImage() {
    let MySrc = firstImage.getAttribute("src");
    if (MySrc === "media/Parrapa Cover.png") {
        firstImage.setAttribute("src", "media/PJ.png");
    } else if (MySrc === "media/PJ.png") {
        firstImage.setAttribute("src", "media/Katy.png");
    } else {
        firstImage.setAttribute("src", "media/Parrapa Cover.png");
    }
};

firstImage.addEventListener("click", switchImage);
