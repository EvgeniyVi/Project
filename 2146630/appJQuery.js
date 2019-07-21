$( document ).ready(function() {
  var comments = 3; // - количество отображаемых коментариев
  hidecomments= "Вернуться к последним отзывам  ";
  showcomments = "Все отзывы";

  $(".all_comments").html( showcomments );

  $(".all_comments").click(function (e){
    e.preventDefault();
    if( $(".block_new_comments:eq("+comments+")").is(":hidden") )
    {
      $(".block_new_comments").show();
      $(".all_comments").html( hidecomments );
    }
    else
    {
      $(".block_new_comments:not(:lt("+comments+"))").hide();
      $(".all_comments").html( showcomments );
    }
  });
});
