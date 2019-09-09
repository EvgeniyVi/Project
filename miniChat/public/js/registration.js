
$(".registration").click( ()=> {
        $(".modal").show();
    });

$(".close").click(()=>{
    $(".modal").hide();
})

$(".register-button").on('click',(e)=> {
    e.preventDefault();
   let data = {
        login: $(".register_email").val(),
        password: $(".register_password").val(),
        ConfirmPassword: $(".confirm_register_password").val()
    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/api/auth/register'
    }).done((data) => {
        if (!data.ok) {
            $(".successful_or_error").text(data.error);
            if (data.fields) {
                data.fields.forEach((item) => {
                    $('input[names = '+ item +']').addClass('error')
                })
            }
        } else {
            $(".successful_or_error").text("Вы успешно зарегистровались!Пожалуйста войдите в свой аккаунт")
            $(".modal").delay(1000).fadeOut(900)
        }
    })
})

$(".sign_in").on('click', (e) => {
    e.preventDefault();
    let data = {
        login: $(".login_input").val(),
        password: $(".password_input").val()
    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/api/auth/login'
    }).done((data) => {
        if (!data.ok) {
            $(".login").text(data.error);
        } else {
           $(location).attr('href','/Dialog_Room')
        }
    })

})














