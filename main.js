$(function() {

    //ハンバーガーメニュー
    $('.hamburger').on('click', function() {
      if ($('#header').hasClass('js-active')) {
        $('#header').removeClass('js-active');
      } else {
        $('#header').addClass('js-active');
      }
    })

    // ナビのリンクをクリックすると閉じる
    $('#nav a').on('click', function() {
      $('#header').removeClass('js-active');
    })

    // ナビのリンクをクリックすると各セクションに移動
    // 「^=」は指定した文字から始まるものを全て含むという意味
    $('#nav ul li a[href^="#"]').click(function() {
      const speed = 500;
      let href = $(this).attr("href");
      // 変数 = 条件 ? 値１ : 値２;
      // 条件に合致してる -> 値１を変数に代入、
      // 条件に合致してない -> 値２を変数に代入。
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    })
    
    //スクロール
    $(window).on('scroll', function() {

      let scrollY = $(window).scrollTop();
      
      /*------------------------------------
        メインビジュアルの拡大・縮小
      -------------------------------------*/
      mv_scale(scrollY);

      let winH = $(window).height();
      let access_Top = $('.access-content').offset().top;
      let gallery_Top = $('#gallery').offset().top;


      //520px分をスクロールした時、ハンバーガーメニューとロゴを表示
      if(scrollY > 520) {
        $('.hamburger').fadeIn(500);
        $('.site-title').fadeIn(500);
      } else {
        $('.hamburger').fadeOut(500);
        $('.site-title').fadeOut(500);
      }

      //accessセクション上部が画面下を通ったら、背景を表示
      //accessセクション上部が画面上を通ったら、背景を非表示
      if(scrollY <= access_Top - winH) {
        $('#access .bg-photo').css('opacity', '0');
      } else if(scrollY >= access_Top) {
        $('#access .bg-photo').css('opacity', '0');
      } else {
        $('#access .bg-photo').css('opacity', '1');
      }
      
      // GALLERYタイトルが画面下にきたタイミングで、
      // 右から左へスライドして右下に表示します。
      // ACCESSタイトルが画面下にきたタイミングで、
      // スライドして非表示にします。スマホの場合は表示しません。
      if(scrollY <= gallery_Top - winH) {
        $('#side-btn').css('right', '-50px');
      } else if(scrollY >= access_Top - winH) {
        $('#side-btn').css('right', '-50px');
      } else {
        $('#side-btn').css('right', '0');
      }

    })

    // inviewでフェードアップ
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });

    // トップに移動するボタン押した時
    $('.to-top').click(function() {
      var position = 0;
      var speed = 1000;
      $("html,body").animate({scrollTop:position},speed);
    })
  /*=================================================
  画面読み込み時と画面幅変更時のイベント
  ===================================================*/
  $(window).on('load resize', function() {
    //　スクロール位置の取得
    let scrollY = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scrollY);
  });
})

function mv_scale(scrollY) {
  // ウィンドウサイズが 900px以下の場合
  if(window.innerWidth > 900) {
      //スクロールするとメインビジュアルの画像が拡大
    $('#mainvisual img').css({
      'width': 100/3 + scrollY/10 + '%'
    });
  // ウィンドウサイズが 900px以上の場合
  } else {
    $('#mainvisual img').css({
        //スクロールするとメインビジュアルの画像が縮小
      'width' : 100 - scrollY/10 + '%'
    });
  }
}