 $(".registration").click( ()=> {
        $(".block-registration").toggle();
    });

$(".register-button").on('click',(e)=>{
    e.preventDefault();
    var data = {
        Login:$(".register_email").val(),
        Password:$(".register_password").val(),
        ConfirmPassword:$(".confirm_register_password").val()
    }
    $.ajax({
        type:'POST',
        data:JSON.stringify(data),
        contentType:'application/json',
        url:'/api/auth/register'
    }).done((data)=>{
        if(!data.ok){
            $(".successful_or_error").text(data.error)
        }else{
            $(".successful_or_error").text("Вы успешно зарегистровались!Пожалуйста войдите в свой аккаунт")
        }
    })
})
