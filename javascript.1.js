document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.getElementById("infoButton");
    const moreInfo = document.getElementById("moreInfo");

    if (infoButton && moreInfo) {
        infoButton.addEventListener("click", function () {
            moreInfo.classList.toggle("visible");
        });
    }
});
