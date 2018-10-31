$(function() {
  $("a").on('click', function(event) {
    var scroll_duration = $(document).height() / 2.5;
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, scroll_duration, function(){
        window.location.hash = hash;
      });
    }
  });
  
  $('.back-to-top').on('click', function(event){
    let scroll_duration = $('.back-to-top').offset().top /2.5;
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_duration
    );
  });
});

