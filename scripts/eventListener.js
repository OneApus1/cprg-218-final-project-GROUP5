const firstImage = document.querySelector("img");

function switchImage() {
    let MySrc = firstImage.getAttribute("src");
    if (MySrc === "media/Colorado_potato_beetle.jpg") {
        firstImage.setAttribute("src", "media/Colorado_potato_beetle_2.jpg");
    } else if (MySrc === "media/Colorado_potato_beetle_2.jpg"){
        firstImage.setAttribute("src", "media/Colorado_potato_beetle_3.jpg");
    } else {
        firstImage.setAttribute("src", "media/Colorado_potato_beetle.jpg");
    }
};

firstImage.addEventListener("click", switchImage);