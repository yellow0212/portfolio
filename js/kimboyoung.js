$(document).ready(function () {
    mainScroll();
    formSubmit();
});

function mainScroll() {
    $("nav ul li a").on("click", function (event) {
        event.preventDefault();

        var targetId = $(this).attr("href");
        var targetOffset = $(targetId).offset().top - 150;

        $("html, body").animate({
            scrollTop: targetOffset
        }, 300);
    });
}

function formSubmit() {
    $("#contactForm").on("submit", function (event) {
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

