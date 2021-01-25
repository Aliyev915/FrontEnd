$(document).ready(function () {
    //Navbar
    let burger = $(".burger");
    let navbarList = $(".navbarMenu");
    let contentPage = $(".contentPage");
    burger.click(function () {
        navbarList.css({
            "transform": "translateX(0px)"
        })
        contentPage.css({
            "opacity": 0.4
        })
    })
    $(window).click(function (e) {
        let XCoordinate = e.pageX
        if (XCoordinate >= 300) {
            navbarList.css({
                "transform": "translateX(-350px)"
            })
            contentPage.css({
                "opacity": 1
            })
        }
    })


    let icon = $(".userdetails div");
    icon.click(function () {
        $(this).css({
            "color": "#00c483"
        })
        icon.not(this).css({
            "color": "white"
        })
    })
    //Navbar


    // Counters
    let projects = $(".facts>div").children().eq(0);
    let clients = $(".facts>div").children().eq(1);
    let awards = $(".facts>div").children().eq(2);
    let keyboards = $(".facts>div").children().eq(3);
    let newCounter = 0;


    let info = $(".info");
    info.scroll(function () {
        if ($(".info").scrollTop() > 1200) {
            statistics(clients, 89);
            statistics(projects, 124);
            statistics(awards, 18);
            statistics(keyboards, 23);
        }
    })
    function statistics(count, stop) {
        let id = setInterval(counters, 100);
        function counters() {
            let counts = count.find(".count");
            if (newCounter < stop) {
                newCounter += 1;
                counts.html(newCounter)
            }
            else {
                clearInterval(id)
            }
        }
    }
    // Counters


    // Progress Bars
    let counter = 0;
    let barWeb = $(".barWeb");
    let barData = $(".barData");
    let barSeo = $(".barSeo");
    let barUI = $(".barUI");
    let barGraphic = $(".barGraphic");

    $(".Education").scroll(function () {
        if ($(".Education").scrollTop() > 80) {
            progress(barWeb, 95);
            progress(barData, 89);
            progress(barSeo, 97);
            progress(barUI, 92);
            progress(barGraphic, 90);
        }
    })

    function progress(bar, stop) {
        let id = setInterval(frame, 70)
        function frame() {
            let bars = bar.prev().find(".value")
            if (counter < stop) {
                counter += 1;
                bar.children().eq(0).css({
                    "width": counter + "%"
                })
                bars.html(counter)
            }
            else {
                clearInterval(id);
            }
        }
    }

    // Progress Bars


    let choice = $(".choices ul li");
    choice.click(function(){
        $(this).css({
            "color":"#00c483"
        })
        choice.not($(this)).css({
            "color":"white"
        })
    })

    let replies=$(".reply");
    let message=$(".message");
    
    replies.click(function(e){
        message.hide();
        $(this).parent().next().show();
        $(".comment").not($(this).parent()).next().hide()
    })
    $(".message-reply p").click(function(){
        $(".message-reply").hide();
        message.show();
    })
})






