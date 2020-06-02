$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });
    
    $toggle.click(function(e){
        $navbar.toggleClass('toggle-left');
    })
});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

const anchors = document.querySelectorAll('.nav-link')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()

        const href = anchor.getAttribute("href")
        console.log(href)

        document.querySelector(href).scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    })
}
