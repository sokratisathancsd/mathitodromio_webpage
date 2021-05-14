var images = ["slide10.jpg","slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide51.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", "slide9.jpg"];
var slidetexts = [
    "Κάθε χρόνο πραγματοποιείται για τους μαθητές μας εκδήλωση με θέμα την διαχείριση του άγχους των εξετάσεων.",
    "Σας Καλωσορίζουμε στον ιστότοπο μας.",
    "Θα μας βρείτε στην Βασ.Βασιλείου 7 και στην Εμμανουήλ Ανδρονίκου 32 (παράρτημα).",
    ".",
    ".",
    "Το μάθημα στο φροντιστήριό μας πραγματοποιείται με τον παραδοσιακό τρόπο, σε αίθουσες με θρανία, αλλά και με μάθημα στο τραπέζι.",
    "Συνδυάζουμε όποτε χρειάζεται και σύγχρονες μεθόδους διδασκαλίας όπως η χρήση του διαδικτύου..",
    ".",
    "Είμαστε δίπλα στους μαθητές μας και στις οικογένειές τους, ενθαρρύνοντας και στηρίζοντας την προσπάθειά τους για την πραγμάτωση των ονείρων τους.",
    ".",
    ".",
];
var i = 0;

function previousPhoto() {
    i--;

    var elem = document.getElementsByClassName("slideshow");
    elem[0].style.backgroundImage = 'url(images/slides/' + images[i % 11] + ')';
    myFunction();
}

function nextPhoto() {
    i++;
    var elem = document.getElementsByClassName("slideshow");
    elem[0].style.backgroundImage = 'url(images/slides/' + images[i % 11] + ')';
    myFunction();
}


function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function myFunction() {
    document.getElementById("winfo").innerHTML = slidetexts[i % 11];
    var el = document.getElementById("images");
    console.log(el);
    fadeIn(el);
}


/*Scroll used for nav-bar on every page*/
$(window).scroll(function () {
    var $el = $('.navigation-bar');
    var isPositionFixed = ($el.css('position') === 'fixed');
    if ($(this).scrollTop() > 120 && !isPositionFixed) {
        $el.css({'position': 'fixed', 'top': '0px', 'box-shadow': '0 8px 16px 0 rgba(0,0,0,0.8)'});
    }
    if ($(this).scrollTop() < 120 && isPositionFixed) {
        $el.css({'position': 'absolute', 'top': '100px', 'box-shadow': 'none'});
    }
});