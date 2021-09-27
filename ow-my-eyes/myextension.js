function dark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";

}

function colorLinks(hex) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.color = hex;
        }
    }
}

dark();
colorLinks('#00FF00');


