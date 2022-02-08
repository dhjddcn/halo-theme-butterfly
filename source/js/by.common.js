/**
 * @Description: 通用逻辑
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.common
 */

const commonContext = {
    //滚动处理
    scroll() {
        let initTop = 0;
        let $header = $( 'header' );
        const $rightside = $( ".by_rightside" );
        const $postSticky = $( ".by_post_sticky" );

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
                        if ( $header.hasClass( 'by_nav_visible' ) ) $header.removeClass( 'by_nav_visible' );
                        if ( !$rightside.hasClass( 'by_rightside_show' ) ) $rightside.addClass( 'by_rightside_show' );
                        $postSticky.removeAttr( "style", "" );
                    } else {
                        if ( !$header.hasClass( 'by_nav_visible' ) ) $header.addClass( 'by_nav_visible' );
                        $postSticky.css( { top: '70px' } );
                    }
                    $header.addClass( 'by_nav_fixed' );
                } else {
                    if ( currentTop === 0 ) {
                        $header.removeClass( 'by_nav_fixed by_nav_visible' );
                        $rightside.removeClass( 'by_rightside_show' );
                    }
                }


            }, 200 )();
        } );
    },
    //左右边小部件
    rightside() {
        const data_theme = localStorage.getItem( 'data-theme' );
        const html = $( "html" );
        if ( data_theme ) html.attr( "data-theme", data_theme );

        $( ".by_rightside  .go_up" ).click( ( e ) => {
            $( "body" ).animate( { scrollTop: 0 }, 800 );
        } );

        $( ".by_rightside  .darkmode" ).click( ( e ) => {
            if ( html.attr( "data-theme" ) === 'light' ) {
                html.attr( "data-theme", 'dark' );
                localStorage.setItem( 'data-theme', 'dark' );
            } else {
                html.attr( "data-theme", 'light' );
                localStorage.setItem( 'data-theme', 'light' )
            }

        } );
    },
    //移动端菜单
    sidebar() {
        const $body = $( "body" );
        const $headerSidebar = $( ".by_header_sidebar" );
        $( '.by_toggle_menu' ).click( () => {
            $body.css( { "overflow": "hidden" } );
            $headerSidebar.slideDown( 'slow' ).toggleClass( 'by_header_sidebar_open' );
        } );
        $( '.by_header_sidebar_mask' ).click( () => {
            $headerSidebar.removeClass( 'by_header_sidebar_open' );
            $body.removeAttr( "style" );
        } );
        //展开/收起
        $( '.by_header_sidebar_menus_item' ).each( function () {
            $( this ).click( function ( e ) {
                if ( $( this ).children( 'ul' ).length ) {
                    e.stopPropagation();    //  阻止事件冒泡
                    $( this ).children( 'ul' ).slideToggle().parent().toggleClass( 'by_child_show' );
                }
            } )
        } )
    },
    //代码块
    initCode() {
        const $pre = $( ".by_post pre ,.by_journals pre" );
        if ( !$pre.length ) return;

        $pre.each( function () {
            let $this = $( this );

            const $codes = $this.find( "code" );

            if ( $codes.length > 0 ) {

                $this.addClass( 'line-numbers' );

                $this.prepend( '<i class="by_icon_copy by-font by_code_copy" title="复制内容"></i><i class="by_icon_arrow-downb by-font by_code_expander" title="折叠/展开"></i>' );

                // $this.children( '.by_code_expander' ).click( () => {
                //     $this.children( 'code' ).slideToggle().siblings( '.by_code_expander' ).toggleClass( 'by_code_expander_close' );
                // } );
                $this.children( '.by_code_expander' ).click( () => {
                    $this.toggleClass( 'by_code_close' );
                } );

                new ClipboardJS( $this.children( '.by_code_copy' )[0], {
                    text: () => $this.find( "code[class*='language-']" ).text(),
                } ).on( "success", () => Qmsg.success( "复制成功！" ) );

                // Prism.highlightAll();
            }
        } )
        // $.getScript( `${ ThemeConfig.BASE_RES_URL }/source/lib/prism/prism.min.js` );
    },
    //文章图片预览
    initGallery() {
        const $imgs = $(
            ".by_post img:not([class])"
        );
        if ( !$imgs.length ) return;
        $imgs.each( function () {
            const $this = $( this );
            $this.wrap(
                $(
                    `<span style="display: block;" data-fancybox="Butterfly" href="${ $this.attr(
                        "src"
                    ) }"></span>`
                )
            );
        } );
    },
    // 清理
    clean() {
        // setTimeout( () => {
        //     $( ".pace" ).remove();
        // }, 2000 );
    }

}
!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( commonContext ).forEach( f => f() );
    } );
})();
