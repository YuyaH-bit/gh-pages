$(function() {
  // ハンバーガーメニュー

  // ハンバーガーメニューのクリックイベント
  $('.hamburger-menu').on('click',function() {
    // #headerにopenクラスが存在する場合
    if ($('#header').hasClass('open')) {
      // openクラスを削除
      $('#header').removeClass('open');
      //左上の画像の切り替え
      $(".toggle-img").attr("src",
      "./img 8/logo-r.svg");
    } else {
      // openクラスを追加
      $('#header').addClass('open');
      //左上の画像の切り替え
      $(".toggle-img").attr("src",
      "./img 8/logo-w.svg");
    }
  });
});

$(function() {
  //フェードイン(#reason)
  $(".js-fadeUp-1, .js-fadeUp-2").on("inview", function() {
    $(this).addClass('is-inview');
  })
  //フェードイン(#voice)
  $(".js-fadeUp-voice").on("inview", function() {
    $(this).addClass('is-inview-voice');
  })
})