$( document ).ready(function() {

/*
$("#button_send_comment").click(function () {
  if($('#input_comment').val() !=""){
      $('<div/>',{
        "class":'block',
      }).appendTo('#result')
    $('.block').html($('#input_comment').val())
  }
})
*/




























  var comments = 5; // - количество отображаемых коментариев
  hidecomments= "Вернуться к последним отзывам  ";
  showcomments = "Все отзывы";

  $(".all_comments").html( showcomments );

  $(".all_comments").click(function (e){
    e.preventDefault();
    if( $(".block:eq("+comments+")").is(":hidden") )
    {
      $(".block").show();
      $(".all_comments").html( hidecomments );
    }
    else
    {
      $(".block:not(:lt("+comments+"))").hide();
      $(".all_comments").html( showcomments );
    }
  });
});
