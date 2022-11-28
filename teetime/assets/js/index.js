var headNav = $(".nav");
/* 初期表示、スクロール時にイベント開始 */
$(window).on("load scroll", function () {
    /* スクロール位置の高さが200pxより大きい、かつis-fixedクラスがない場合 */
    if ($(this).scrollTop() > 200 && headNav.hasClass("is-fixed") == false) {
        headNav.css("display", "block");
        headNav.css({ "top": "-72px" }); /* ヘッダーの高さ分マイナスにする */
        headNav.addClass("is-fixed");
        headNav.animate({ "top": 0 }, 600);
    }
    /* スクロール位置の高さが200pxより小さい、かつis-fixedクラスがある場合 */
    else if ($(this).scrollTop() < 200 && headNav.hasClass("is-fixed") == true) {
        headNav.removeClass("is-fixed");
        headNav.css("display", "none");
        headNav.animate({ "top": "-100%" }, 600);

    }
});

$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });

  