/**
 * @Description: 通用逻辑
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.common
 */
const html = $( "html" );

const commonContext = {
    //滚动处理
    scroll() {
        let initTop = 0;
        const sideWidget = $( ".sideWidget" );
        const header = $( ".header" );

        //滚动方向
        function scrollDirection( currentTop ) {
            const result = currentTop > initTop // true is down & false is up
            initTop = currentTop
            return result
        }

        window.addEventListener( 'scroll', () => {
            return ByUtils.throttle( function ( e ) {
                const currentTop = window.scrollY || document.documentElement.scrollTop;
                const isDown = scrollDirection( currentTop );
                if ( currentTop ) {
                    if ( isDown ) {
                        if ( header.hasClass( 'visible' ) ) header.removeClass( 'visible' );
                        if ( !sideWidget.hasClass( 'show' ) ) sideWidget.addClass( 'show' );
                        // $postSticky.removeAttr( "style", "" );
                    } else {
                        if ( !header.hasClass( 'visible' ) ) header.addClass( 'visible' );
                        // $postSticky.css( { top: '70px' } );
                    }
                    header.addClass( 'fixed' );
                } else {
                    if ( currentTop === 0 ) {
                        header.removeClass( 'fixed visible' );
                        sideWidget.removeClass( 'show' );
                    }
                }
            }, 200 )();
        } );

    },
    action() {
        window.lazyLoadInstance = new LazyLoad( {
            elements_selector: 'img',
            threshold: 0,
            data_src: 'lazy-src'
        } )

        $( '.header__action' ).on( 'click', 'a', function ( event ) {
            const t = $( this );
            if ( t.hasClass( 'search' ) ) {
                html.addClass( 'disable-search' );
            }
            if ( t.hasClass( 'toggle' ) ) html.addClass( 'disable-scroll' );
        } );

        $( '.n_close' ).on( 'click', function () {
            html.removeClass( 'disable-search' );
        } );

        $( '.header__mask' ).on( 'click', function () {
            html.removeClass( 'disable-scroll disable-search' );
        } );

        $( 'nav.blog_menu' ).on( 'click', 'div', function () {
            $( this ).children( '.child' ).stop().slideToggle();
            $( this ).children( 'a' ).stop().toggleClass( 'active' );
        } )
    },
    // //左右边小部件
    sideWidget() {
        const data_theme = localStorage.getItem( 'data-mode' );
        if ( data_theme ) html.attr( "data-mode", data_theme );

        $( ".sideWidget  .top_up" ).on( 'click', ( e ) => {
            $( 'body,html' ).animate( { scrollTop: 0 }, 500 );
        } );

        $( ".sideWidget>.darkmode" ).on( 'click', ( e ) => {
            if ( html.attr( "data-mode" ) === 'light' ) {
                html.attr( "data-mode", 'dark' );
                localStorage.setItem( 'data-mode', 'dark' );
            } else {
                html.attr( "data-mode", 'light' );
                localStorage.setItem( 'data-mode', 'light' )
            }
        } );
    },
    // //代码块
    // initCode() {
    //     const $pre = $( ".post pre ,.journals pre" );
    //     if ( !$pre.length ) return;
    //
    //     $pre.each( function () {
    //         let $this = $( this );
    //
    //         const $codes = $this.find( "code" );
    //
    //         if ( $codes.length > 0 ) {
    //
    //             $this.addClass( 'line-numbers' );
    //
    //             $this.prepend( '<i class="by_icon_copy by-font by_code_copy" title="复制内容"></i><i class="by_icon_arrow-downb by-font by_code_expander" title="折叠/展开"></i>' );
    //
    //             // $this.children( '.code_expander' ).click( () => {
    //             //     $this.children( 'code' ).slideToggle().siblings( '.code_expander' ).toggleClass( 'by_code_expander_close' );
    //             // } );
    //             $this.children( '.code_expander' ).click( () => {
    //                 $this.toggleClass( 'by_code_close' );
    //             } );
    //
    //             new ClipboardJS( $this.children( '.code_copy' )[0], {
    //                 text: () => $this.find( "code[class*='language-']" ).text(),
    //             } ).on( "success", () => Qmsg.success( "复制成功！" ) );
    //
    //             // Prism.highlightAll();
    //         }
    //     } )
    //     // $.getScript( `${ ThemeConfig.BASE_RES_URL }/source/lib/prism/prism.min.js` );
    // },
    // //文章图片预览
    // initGallery() {
    //     const $imgs = $(
    //         ".post img:not([class])"
    //     );
    //     if ( !$imgs.length ) return;
    //     $imgs.each( function () {
    //         const $this = $( this );
    //         $this.wrap(
    //             $(
    //                 `<span style="display: block;" data-fancybox="Butterfly" href="${ $this.attr(
    //                     "src"
    //                 ) }"></span>`
    //             )
    //         );
    //     } );
    // },
    // // 清理
    // clean() {
    //     // setTimeout( () => {
    //     //     $( ".pace" ).remove();
    //     // }, 2000 );
    // }

}
!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( commonContext ).forEach( f => f() );
    } );
})();
