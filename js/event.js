$(document).ready(function () {
    $('.burger').on('click', function (event) {
      event.preventDefault();
      $('.square').toggleClass('backBlur');
    });
    $(".menu li a").on("click", function (event) {
        $('square').toggleClass('backBlur');
    });
  });