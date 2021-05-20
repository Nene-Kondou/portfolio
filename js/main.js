$(document).ready(function () {

  // ハンバーガーメニュー
  $('.drawer-icon-bars').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.drawer-content').toggleClass("is-active");
    $('.drawer-background').toggleClass("is-active");
  });


  // ヘッダー色反転
  $(window).scroll(function() {
    if ($(this).scrollTop() > 720) {
      $('.header').addClass('is-scroll');
      $('.drawer-icon-bars').children().addClass('is-scroll');
    } else {
      $('.header').removeClass('is-scroll');
      $('.drawer-icon-bars').children().removeClass('is-scroll');
    }
  });


  // スムーススクロール
  $('a[href^="#"]').click(function() {
    let header = $('.header-inner').innerHeight();
    let speed = 500;
    let id = $(this).attr("href");
    let target = $(id == "#" || id == "" ? 'html' : id);
    let position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


  new WOW().init();
 });