$(document).ready(function () {
    // navbar
    $(".navLinks>li").mouseenter(function () {
        $(this).children().eq(1).slideDown(200)
    })
    $(".navLinks>li").mouseleave(function () {
        $(this).children().eq(1).slideUp(200)
    })
    $(".Layout").mouseenter(function () {
        $(".portfolioLayout").fadeIn(500)
    })
    $(".Layout").mouseleave(function () {
        $(".portfolioLayout").fadeOut(500)
    })
    $(".Single").mouseenter(function () {
        $(".portfolioSingles").fadeIn(500)
    })
    $(".Single").mouseleave(function () {
        $(".portfolioSingles").fadeOut(500)
    })
    $(".Type").mouseenter(function () {
        $(".postType").fadeIn(500)
    })
    $(".Type").mouseleave(function () {
        $(".postType").fadeOut(500)
    })
    $(".Element ul>li").mouseenter(function () {
        $(this).children().eq(1).fadeIn(800)
    })
    $(".Element ul>li").mouseleave(function () {
        $(this).children().eq(1).fadeOut(800)
    })

    $(".search").click(function () {
        $(".search2").slideToggle()
        $(".search2").css({
            "display": "flex"
        })
    })
    $(".basket").mouseenter(function () {
        $(".products").css({
            "display": "block"
        })
    })
    $(".basket").mouseleave(function () {
        $(".products").css({
            "display": "none"
        })
    })
    $(".navbarResponsive div p").click(function () {
        let icon = $(this).find("i")
        iconDirect(icon)
        $(this).next().slideToggle()
    })
    $(".navbarResponsive div ul>li a").click(function () {
        let icon = $(this).find("i")
        iconDirect(icon)
        $(this).next().slideToggle();
    })
    let burger = $(".burger").html();
    let X = $("i.fas.fa-times");
    $(".burger").click(function () {
        if ($(".burger").html() == burger) {
            X.css({
                "display": "block"
            })
            $(".burger").html(X)
            $(this).prev().css({
                "transform": "translateX(0)"
            })
        } else {
            X.css({
                "display": "none"
            })
            $(".burger").html(burger)
            $(this).prev().css({
                "transform": "translateX(1000%)"
            })
        }
    })
    function iconDirect(icon) {
        if (icon.hasClass("fa-caret-right")) {
            icon.removeClass("fa-caret-right").addClass("fa-caret-down");
            console.log("salam")
        }
        else {
            icon.attr("class", "fas , fa-caret-right");
            console.log("sagol")

        }
    }
    // navbar
    // Slider
    let images = $(".mySlider .images")
    let left = $(".fa-long-arrow-alt-left");
    let right = $(".fa-long-arrow-alt-right");
    let count = 0;
    let len = $(".mySlider .item").length;
    let interval = setInterval(slide, 5000);
    left.click(function () {
        if (count > 0) {
            images.css({
                "margin-left": "-" + 100 * count + "%"
            })
            count--;
        } else {
            count = len - 1;
        }
    })
    right.click(function () {
        if (count < len) {
            images.css({
                "margin-left": "-" + 100 * count + "%"
            })
            count++;
        } else {
            count = 0;
        }
    })
    function slide() {
        if (count < len) {
            images.css({
                "margin-left": "-" + 100 * count + "%"
            })
            count++;
        } else {
            count = 0;
        }
    }
    // Slider

    // Flowers
    $(".FlowerList>div").click(function () {
        $(".FlowerList").children().not(this).css({
            color: "black"
        });
        $(this).css({
            color: "#f34f3f"
        });
    })
    $(".FlowerList > div").click(function () {
        let data = $(this).attr("data-id");
        let products = $(".flowersList .images .item");
        products.each(function () {
            if (data == $(this).attr("data-id")) {
                $(this).parent().fadeIn();
            } else {
                $(this).parent().hide();
            }
            if (data == "All") {
                $(".images").children().children().show();
            }
        });
    })
    $(".flowersList .item").mouseenter(function () {
        $(this).find("span.addtocart").css({
            "display": "inline-block"
        })
        $(this).find(".price").css({
            "display": "none"
        })
    })
    $(".flowersList .item").mouseleave(function () {
        $(this).find("span.addtocart").css({
            "display": "none"
        })
        $(this).find(".price").css({
            "display": "inline-block"
        })
    })
    $(".responsive-lists").click(function () {
        $(".FlowerList > div").toggleClass("list-active");
    })
    $(".dropDown").mouseover(function () {
        $(".dropItem").addClass("d-flex");
    })
    $(".dropDown").mouseleave(function () {
        $(".dropItem").removeClass("d-flex");
    })
    $(".dropDown .default").click(function (e) {
        $(this).parent().children().not(".all").children().children().css({
            "color": "#1b1b1b"
        })
        $(this).children().children().eq(0).css({
            "color": "#f34f3f"
        })
        $(".all_images").addClass("Active");
        $(".all_images").removeClass("d-none");
        $(".Active").not(".all_images").addClass("d-none")
    })
    // Flowers

    // Video

    // Video

    // Slider2
    $(".images.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: 2000
    })
    $(".slider2 .owl-carousel").owlCarousel();
    // Go to the next item
    $('.slider2 .left').click(function () {
        $(".slider2 .owl-carousel").trigger('next.owl.carousel', [500]);
    })
    // Go to the previous item
    $('.slider2 .right').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $(".slider2 .owl-carousel").trigger('prev.owl.carousel', [500]);
    })

    // Slider2

    // OwlCarousel
    $(".owlCarousel .images .item img").mouseenter(function () {
        $(this).prev().css({
            "opacity": "1"
        })
    })
    $(".owlCarousel .images .item img").mouseleave(function () {
        $(this).prev().css({
            "opacity": "0"
        })
    })
    $(".slideArea.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    })

    // OwlCarousel

    // Add to Cart
    let value = $(".quantity input").val();
    $(".quantity .fa-caret-right").click(function () {
        value = Number(value) + 1
        $(".quantity input").val(value);
    })
    $(".quantity .fa-caret-left").click(function () {
        if (value > 0) {
            value = Number(value) - 1;
            $(".quantity input").val(value);
        }
    })
    // Add to Cart

    // tab-menu
    $("#description").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        $("#descript").show();
        $(".tab-content").children().not("#descript").hide()

    })
    $("#info").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-content").children().not("#information").hide();
        $("#information").show()

    })
    $("#review").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        $("#reviews").show()
        $(".tab-content").children().not("#reviews").hide()

    })

    $(".tab-left .service").click(function () {
        $(".tab-left .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-left .service-text").show();
        $(".tab-left .tab-content").children().not(".tab-left .service-text").hide()

    })
    $(".tab-left .shop").click(function () {
        $(".tab-left .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-left .tab-content").children().not(".tab-left .shop-text").hide();
        $(".tab-left .shop-text").show()

    })
    $(".tab-left .product").click(function () {
        $(".tab-left .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-left .product-text").show()
        $(".tab-left .tab-content").children().not(".tab-left .product-text").hide()

    })
    $(".tab-right .service").click(function () {
        $(".tab-right .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-right .service-text").show();
        $(".tab-right .tab-content").children().not(".tab-right .service-text").hide()

    })
    $(".tab-right .shop").click(function () {
        $(".tab-right .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-right .tab-content").children().not(".tab-right .shop-text").hide();
        $(".tab-right .shop-text").show()

    })
    $(".tab-right .product").click(function () {
        $(".tab-right .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".tab-right .product-text").show()
        $(".tab-right .tab-content").children().not(".tab-right .product-text").hide()

    })
    $(".full-tab .service").click(function () {
        $(".full-tab .Selected2").removeClass("Selected2");
        $(this).addClass("Selected2");
        $(".full-tab .service-text").show();
        $(".full-tab .tab-content").children().not(".full-tab .service-text").hide()

    })
    $(".full-tab .shop").click(function () {
        $(".full-tab .Selected2").removeClass("Selected2");
        $(this).addClass("Selected2");
        $(".full-tab .tab-content").children().not(".tab-right .shop-text").hide();
        $(".full-tab .shop-text").show()
    })
    $(".full-tab .product").click(function () {
        $(".full-tab .Selected2").removeClass("Selected2");
        $(this).addClass("Selected2");
        $(".full-tab .product-text").show()
        $(".full-tab .tab-content").children().not(".full-tab .product-text").hide()
    })
    $(".row-tab .service").click(function () {
        $(".row-tab .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".row-tab .service-text").show();
        $(".row-tab .tab-content").children().not(".row-tab .service-text").hide()

    })
    $(".row-tab .shop").click(function () {
        $(".row-tab .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".row-tab .tab-content").children().not(".row-tab .shop-text").hide();
        $(".row-tab .shop-text").show()
    })
    $(".row-tab .product").click(function () {
        $(".row-tab .selected").removeClass("selected");
        $(this).addClass("selected");
        $(".row-tab .product-text").show()
        $(".row-tab .tab-content").children().not(".row-tab .product-text").hide()
    })
    $(".related .item").mouseenter(function () {
        $(this).find("span.addtocart").css({
            "display": "inline-block",
            "transform": "translateX(100%)"
        })
        $(this).find(".price").css({
            "opacity": 0
        })
    })
    $(".related .item").mouseleave(function () {
        $(this).find("span.addtocart").css({
            "display": "none",
            "transform": "translate(0)"
        })
        $(this).find(".price").css({
            "opacity": 1
        })
    })
    // tab-menu

    $(".flowers .images").mouseenter(function () {
        $(this).children().eq(0).css({
            "opacity": 0.1
        })
        $(this).children().eq(1).css({
            "opacity": 1
        })
    })
    $(".flowers .images").mouseleave(function () {
        $(this).children().eq(0).css({
            "opacity": 1
        })
        $(this).children().eq(1).css({
            "opacity": 0
        })
    })
    $(".flowers .item").mouseenter(function () {
        $(this).find("span.addtocart").css({
            "display": "inline-block",
            "transform": "translateX(100%)"
        })
        $(this).find(".price").css({
            "opacity": 0
        })
    })
    $(".flowers .item").mouseleave(function () {
        $(this).find("span.addtocart").css({
            "display": "none",
            "transform": "translate(0)"
        })
        $(this).find(".price").css({
            "opacity": 1
        })
    })
    $(".features .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    let owl = $('.features .owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.owl-prev').click(function () {
        owl.trigger('next.owl.carousel', [1000]);
    })
    // Go to the previous item
    $('.owl-next').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [1000]);
    })
    
    // Shop List

    let grow_bar = $(".grow-bar");
    let water_bar = $(".water-bar");
    let furtlize_bar = $(".furtlize-bar");
    let counter = 0;

    progress(furtlize_bar, 55);
    progress(grow_bar, 95);
    progress(water_bar, 75);
    function progress(bar, stop) {
        let id = setInterval(frame, 50)
        function frame() {
            let bars=bar.parent().prev().find(".count")
            if (counter < stop) {
                counter += 1;
                bar.css({
                    "width": counter + "%"
                })
                bars.html(counter+"%")
            }
            else {
                clearInterval(id);
            }
        }
    }
    let topButton=$(".backTop");
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            topButton.css({
                "display":"block"
            })
        }
        else{
            topButton.css({
                "display":"none"
            })
        }
        topButton.click(function(){
            $(window).scrollTop(0);
        })
    })

    
})
