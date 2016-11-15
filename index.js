function loadContent(page) {
    var iframe1 = "<iframe src=";
    var iframe2 = "></iframe>";
    document.getElementById("screen_in").innerHTML = iframe1 + page + iframe2;
}