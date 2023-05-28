function fadeIn(elementId, duration) {
    $(elementId).fadeIn(duration);
}

function fadeOut(elementId, duration) {
    $(elementId).fadeOut(duration);
}


$(document).ready(function () {
    $('#btn_more').on('click', function () {
        fadeOut("#less_text", 1000);
        fadeOut("#btn_more", 1000);
        fadeOut(".h1-div", 1000);
        setTimeout(() => {
            fadeIn("#more_text", 1000);
            fadeIn("#btn_less", 1000);
            fadeIn(".h1-div", 1000);
            $("#btn_less").css({ display: "flex"})
        }, 1000);
    });

    $('#btn_less').on('click', function () {
        fadeOut(".h1-div", 1000);
        fadeOut("#more_text", 1000);
        fadeOut("#btn_less", 1000);
        setTimeout(() => {
            fadeIn(".h1-div", 1000);
            fadeIn("#less_text", 1000);
            fadeIn("#btn_more", 1000);
        }, 1000);
    });
});