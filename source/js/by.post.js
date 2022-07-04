/**
 * @Description: 文章
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.post
 */

const postContext = {
    //分享微信二维码
    initShare() {
        const $qrcode_wx = $( '.qrcode_wx' );
        if ( !$qrcode_wx.length ) return;

        $qrcode_wx.qrcode( {
            width: 140,
            height: 140,
            render: "canvas",
            typeNumber: -1,
            correctLevel: 0,
            background: "#ffffff",
            foreground: "#000000",
            text: location.href,
        } );

    },
    // 文章目录
    initToc() {
        if ( document.body.clientWidth <= 1200 ) return;

        var baseTopPadding = 240,
          maxToppadding = 134,
          offset = 100,
          bottomOffset = 30;
        if ($("div").hasClass("toc")) {
          $(".toc-container").css("height", $(".by_main").outerHeight());
        } else {
          // 纠正TOC为空时，警告问题
          return;
        }

        $(".by_container")
        .children("h1,h2,h3,h4,h5")
        .each(function (index) {
          var hyphenated = "toc-head-" + index;
          $(this).attr("id", hyphenated);
        });


        tocbot.init( {
            tocSelector: "#js-toc",
            contentSelector: ".by_container",
            ignoreSelector: ".js-toc-ignore",
            headingSelector: "h1, h2, h3, h4, h5",
            collapseDepth: 0,
            hasInnerContainers: false,
            // headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
            scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
            positionFixedSelector: ".by_catalogue", // 固定类添加的容器
            // positionFixedClass: "is-position-fixed", // 固定类名称
            fixedSidebarOffset: "auto",
            // disableTocScrollSync: true,
            // headingsOffset: $("#page").find(".pattern-center").length > 0 ? -500 : -230,
            scrollEndCallback: function (e) {
              if ($(".is-active-link").length == 0) {
                return;
              }
              if ($(window).scrollTop() == 0) {
                $(".toc").animate({
                  scrollTop: 0,
                });
                return;
              }
              var activeLikeOffset =
                $(".is-active-link").offset().top - $(window).scrollTop();
              // 当前可视高度小于100，则滚动时toc向上偏移一个li的高度
              if (activeLikeOffset < offset) {
                $(".toc").animate({
                  scrollTop:
                    $(".toc").scrollTop() -
                    (offset - activeLikeOffset + $(".is-active-link").height()),
                });
              } else if (activeLikeOffset > $(window).height() - bottomOffset) {
                $(".toc").animate({
                  scrollTop: $(".toc").scrollTop() + (activeLikeOffset - offset),
                });
              }
            },
        } );

        // $( '.by_toc_expander .by-font' ).click( function ( e ) {
        //     e.stopPropagation();
        //     $( this ).parents( '.by_toc_container' ).toggleClass( 'hide' );
        // } )
        var interval = setInterval(function () {
          if(document.readyState == "complete"){
            $(".toc").css(
              "max-height",
              $(document).scrollTop() + ($(window).height() - baseTopPadding) + "px"
            );
    
            $(".toc-container").css(
              "height", ($(".by_main").outerHeight() - baseTopPadding) + "px"
            );
    
            $(window).scroll(function () {
              var s = $(document).scrollTop();
              if (s == 0) {
                $(".toc").css(
                  "max-height",
                  $(document).scrollTop() +
                  ($(window).height() - baseTopPadding) +
                  "px"
                );
              } else if (s > offset) {
                $(".toc").css(
                  "max-height",
                  $(window).height() - maxToppadding + "px"
                );
              } else {
                $(".toc").css(
                  "max-height",
                  $(document).scrollTop() +
                  ($(window).height() - baseTopPadding) +
                  "px"
                );
              }
            });
            clearInterval(interval);
          }
        },2000);

    }
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( postContext ).forEach( f => f() );
    } );
})();


