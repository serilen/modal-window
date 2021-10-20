;(function(){
	"use strict";

$(function() {
  $('#modal-winwows-button').click(function () {
    $('.modal-window').addClass('modal-window--active');
    $('body').addClass('hidden');
  });
 
  $('.modal-window__close-button').click(function () {
    $('.modal-window').removeClass('modal-window--active');
    $('body').removeClass('hidden');
  });
});

// Закрытие модального окна при клике вне его контентной области
 $('.modal-window').mouseup(function(e) {
   let modalWindowContent = $(".modal-window__content");
   if (!modalWindowContent.is(e.target) && modalWindowContent.has(e.target).length === 0) {
     $(this).removeClass('modal-window--active');
     $('body').removeClass('hidden');
   }
 });

})();

