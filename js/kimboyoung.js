$(document).ready(function () {
    mainScroll();
    formSubmit();
    slider(".projectSlider");
});

function mainScroll() {
    $("nav ul li a").on("click", function (event) {
        event.preventDefault();

        var targetId = $(this).attr("href");
        var targetOffset = $(targetId).offset().top - 130;

        $("html, body").animate({
            scrollTop: targetOffset
        }, 300);
    });
}

function formSubmit() {
    $("#contactForm").on("submit", function (event) {s
        event.preventDefault();

        var formData = {
            name: $("#uName").val(),
            title: $("#utitle").val(),
            email: $("#uMail").val(),
            message: $("#msg").val()
        };

        $.ajax({
            url: "/send-email",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                alert(response.message); 
                $("#contactForm")[0].reset(); 
            },
            error: function () {
                alert("메일 전송에 실패했습니다."); 
            }
        });
    });
}

function slider(target){
    $(target).bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1920,
        slideMargin: 20,
        moveSlides: 1,
        pager: true,
        controls: true,
        infiniteLoop: false,
        touchEnabled: false
    });
}
