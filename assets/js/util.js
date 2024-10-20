function displaySaveContact() {
    // let isBigWindow = $(this).width() > 550;
    // if (isBigWindow) {
    //     document.getElementById("saveContact").style.display = "none";

    // } else {
    //     document.getElementById("saveContact").style.display = "block";
    // }
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months + 1;
}

function changeState() {
    let mode = localStorage.getItem("mode");
    if (mode == "light") {
        localStorage.setItem("mode", 'dark');

        window.location.reload()
    } else if (mode == "dark") {
        localStorage.setItem("mode", 'light');
        window.location.reload()
    }
}