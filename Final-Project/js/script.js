$(document).ready(function () {


    // back to top start
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.back-to-top').css({
                'display': 'flex'
            });
        } else {
            $('.back-to-top').hide();
        }
    })
    $('.back-to-top').on('click', function () {
        $(window).scrollTop(0);
    })
    // back to top end

    //  NavbarPosition position method defined for used which kind of navbar (fixed or normal)
    NavbarPosition();

    // It is used to define which kind of navbar (normal or fixed)
    // If scrollTop is greater than 100 it is used fixed navbar
    $(window).scroll(function () {
        NavbarPosition();
    })

    setInterval(DateTimeNow, 1000);

    // navbar-responsive start
    // dropdown list is used for
    let page = $('.page');
    let dropDownList = $('.dropDownList');
    page.mouseover(function () {
        dropDownList.css({
            "display": "flex"
        })
    })
    page.mouseleave(function () {
        dropDownList.css({
            "display": "none"
        })
    })
    let addPost = $('.btnPost');
    addPost.mouseover(function () {
        $(this).text('');
        let i = $('<i></i>');
        i.addClass('fas fa-plus');
        $(this).append(i);
    })
    addPost.mouseleave(function () {
        $(this).text('Post a Job');
    })

    let responsivePage = $('.page-responsive');
    let dropDownListResponsive = $('.page-responsive .dropDownList');
    responsivePage.click(function () {
        let right = $('.fa-caret-right');
        let down = $('.fa-caret-down');
        dropDownList.slideToggle();
        if (dropDownListResponsive.css('display') != 'none') {
            down.removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        right.removeClass('fa-caret-right').addClass('fa-caret-down');
    });

    let burger = $('.burger-button');
    burger.click(function () {
        $('.nav-list').slideToggle();
    })
    // navbar responsive end

    // Search area start
    // it is used for show search icon when search button hovered 
    let locationArea = $('.location-area');
    let location = $('#location div');
    let selectionList = $('.search-area .selection');
    let findJob = $('.findJob');
    locationArea.on('click', function (e) {
        selectionList.toggle();
    })
    $('.search-area .selection li').click(function () {
        let value = $(this).text();
        location.text(value);
    })

    findJob.on('mouseover', function () {
        $(this).text("");
        let i = $('<i></i>');
        i.addClass('fas fa-search');
        $(this).append(i);
    })
    findJob.on('mouseleave', function () {
        $(this).text('Find Job');
    })
    // Search area end

    // commenting
    $('.comment-input').on('focus', function () {
        $('.send').show();
    })
    $('.comment-input').on('keydown', function () {
        if ($(this).val().trim().length != 0) {
            $('button.btn-send').removeAttr('disabled');
        } else {
            $('button.btn-send').attr('disabled', 'disabled');
        }
    })
    $('a.btn-send').on('click', function (e) {
        e.preventDefault();
        $('.send').hide();
    })
    // commenting

    // favorite clicking start
    $('.favorite').on('click',function(){
        $(this).children('').toggleClass('fas');
    })
    // favorite clicking end

    // counter up section start
    // This is used for counter up with plugin counter up 
    if ($('div').hasClass('statistics')) {
        let x = 0;
        let countPos = $('.statistics').position();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > countPos.top - 500) {
                if (x < 1) {
                    counterUp();
                    x++;
                }
                else {
                    return;
                }
            }
        })
    }
    // counter up section end

    // OWL CAROUSEL SECTION START

    // partnerships carousel 
    $('.partnership-company .owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        nav: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    // partnerships carousel 

    // blog-area carousel start
    $('.blog-area .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: 0,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.left').click(function () {
        $(this).parent().children('.owl-carousel').trigger('next.owl.carousel');
    });

    $('.right').click(function () {
        $(this).parent().children('.owl-carousel').trigger('prev.owl.carousel');
    });
    // blog-area carousel end

    // portfolio area carouel start
    $('.candidate-portfolio .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: 0,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // portfolio area carousel end
    // OWL CAROUSEL SECTION END

    // job-searching area start
    $('.job-features .icon').click(function () {
        $(this).parent().next().slideToggle(600);
        let plus=$(this).children('.fa-plus');
        let minus=$(this).children('.fa-minus');
        if ($(this).parent().next().css('display') != 'none') {
            plus.removeClass('fa-plus').addClass('fa-minus');
        }
        minus.removeClass('fa-minus').addClass('fa-plus');
    })

    $('.left-section .down').click(function () {
        DropDownOpen($(this).prev());
    })

    $('.selectList li').click(function () {
        let val = $(this).text();
        $(this).parent().parent().prev().val(val);
        $(this).parent().parent().hide();
    })
    $('.selectList').prev().click(function () {
        DropDownOpen($(this).next());
    })
    // job-searching area end

    // slider area start
    let left = $('.left-icon');
    let right = $('.right-icon');
    let len = $('.slider .item').length;
    let count = 0;
    setInterval(Slide, 2000);
    left.click(function () {
        if (count > 0) {
            $('.slider .image').css({
                'margin-left': '-' + 100 * count + '%'
            })
            count--;
        } else {
            count = len - 1;
        }
    })
    right.click(function () {
        if (count < len) {
            $('.slider .image').css({
                'margin-left': '-' + 100 * count + '%'
            })
            count++;
        } else {
            count = 0;
        }
    })
    // slider area end


    // functions  => for the prevent to replay code
    function NavbarPosition() {
        if ($(window).scrollTop() > 100) {
            $('.navbarSection').css({
                'display': 'none'
            });
            $('.fixed-navbar').css({
                'display': 'block'
            })
        } else {
            $('.navbarSection').css({
                'display': 'block'
            });
            $('.fixed-navbar').css({
                'display': 'none'
            })
        }
    }

    function counterUp() {
        $('.counter').countTo({
            from: 0,
            speed: 4000,
            refreshInterval: 10
        });
    }

    function DateTimeNow() {
        let hours = $('.hour');
        let minutes = $('.minute');
        let seconds = $('.second');
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        if (m.toString().length != 1) {
            minutes.text(m);
        } else {
            minutes.text('0' + m);
        }

        if (h.toString().length != 1) {
            hours.text(h);
        } else {
            hours.text('0' + h);
        }

        if (s.toString().length != 1) {
            seconds.text(s);
        } else {
            seconds.text('0' + s);
        }
    }

    function DropDownOpen(elem) {
        if (elem.css('display') == 'none') {
            $('.selectList').css({
                'display': 'none'
            })
            elem.css({
                'display': 'block'
            })
        } else {
            elem.css({
                'display': 'none'
            })
        }
    }

    function Slide() {
        if (count < len) {
            $('.slider .image').css({
                'margin-left': '-' + 100 * count + '%'
            })
            count++;
        }
        else {
            count = 0;
        }
    }
    // functions end

})