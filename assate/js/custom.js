$('#abd').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,   
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    dots:true,
    navText: ['&#8592;', '&#8594;'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
})


var acc = document.getElementsByClassName("accordion");
         var i;

         for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
               panel.style.display = "block";
            }
            });
         }



$('#slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,   
    autoplayTimeout: 3000,
    smartSpeed: 400,
    center: true,
    dots:true,
    navText: ['&#8592;', '&#8594;'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:1
        }
    }
})