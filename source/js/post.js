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

        tocbot.init( {
            tocSelector: "#js-toc",
            contentSelector: ".by_container",
            ignoreSelector: ".js-toc-ignore",
            headingSelector: "h1, h2, h3, h4, h5",
            collapseDepth: 0,
            hasInnerContainers: false,
            headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
            scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
            positionFixedSelector: ".by_catalogue", // 固定类添加的容器
            // positionFixedClass: "is-position-fixed", // 固定类名称
            fixedSidebarOffset: "auto",
            // scrollEndCallback: function (e) {},
        } );

        // $( '.by_toc_expander .by-font' ).click( function ( e ) {
        //     e.stopPropagation();
        //     $( this ).parents( '.by_toc_container' ).toggleClass( 'hide' );
        // } )

    }
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( postContext ).forEach( f => f() );
    } );
})();


