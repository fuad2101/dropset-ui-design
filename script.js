function dropdown() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

function slideSwitch() {
    var $active = $('#slider img.active');
    if ($active.length == 0) $active = $('#slider img:last');
    var $next = $active.next().length ? $active.next()
        : $('#slider img:first');
    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}
$(function () {
    setInterval("slideSwitch()", 5000);
});