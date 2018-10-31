const offset = 300,
      offset_opacity = 1200,
      $back_to_top = $('.back-to-top');

$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('fade-out');
  }
});