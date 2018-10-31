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
});