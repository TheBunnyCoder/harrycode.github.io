/*!
 * BootstrapPlusPlus v1.0.0-beta (https://bootstrapplusplus.com)
 * Copyright 2017 The BootstrapPlusPlus 
 * Licensed under MIT (https://github.com/BootstrapPlusPlus/BootstrapPlusPlus/blob/master/LICENSE.md)
 */

$(document).ready(function(){

  /* script for dropdown on hover */
  $('.dropdown-hover').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
  });

  /* script for label color */
  $('.form-group').click(function(){
    $(this).addClass('label-focus');
  });
  $('input').blur(function(){
    $('.form-group').removeClass('label-focus');
  });

});
