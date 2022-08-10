/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: main
 */

const MainElement = {
    body: $( document.body ),
    header: {
        navbar: $( ".header > .navbar" ),
        action: $( ".header> .navbar> .action" ),
        search: $( ".header > .search" ),
        sidebar: $( ".header> .sidebar" ),
        close: $( ".header> .close" ),
    },
    asideWidget: $( ".aside_widget" )
}

const MainContext = {
    //图片加载
    lazyLoad() {
        window.lazyLoadInstance = new LazyLoad( {
            elements_selector: 'img', threshold: 0, data_src: 'lazy-src'
        } );
    },
    // 一些操作
    action() {
        const body = $( document.body );
        body.attr( "data-theme", localStorage.getItem( "data-theme" ) || "light" );
        const themeSwitch = $( ".theme-switch" )
        themeSwitch.on( "click", () => {
            if ( body.attr( "data-theme" ) === 'light' ) {
                body.attr( "data-theme", "dark" );
                localStorage.setItem( "data-theme", "dark" );
            } else {
                body.attr( "data-theme", 'light' );
                localStorage.setItem( 'data-theme', 'light' )
            }
        } );


        const close = $( ".header > .mask,.header > .search .close" );
        close.unbind( "click" ).click( function ( e ) {
            const classList = e.target.classList;


            if ( classList.contains( "mask" ) || classList.contains( "close" ) ) {

                MainElement.header.search.css( { "animation": " 0.5s  search-scale-hide" } );
                setTimeout( () => {
                    MainElement.header.search.hide();
                }, 500 )
            }

            if ( classList.contains( "mask" ) ) {
                MainElement.header.sidebar.removeClass( "active" );
            }

            document.body.classList.remove( "disable-scroll" );

        } )
    },
    navbar() {
        //搜索
        $( MainElement.header.action ).children( ":first" ).on( "click", () => {
            MainElement.body.addClass( "disable-scroll" );
            MainElement.header.search.show().css( { "animation": " 0.5s  search-scale-show" } );
        } )

        //移动menu
        $( MainElement.header.action ).children( ":last" ).on( "click", function () {
            MainElement.header.sidebar.toggleClass( 'active' );
            MainElement.body.addClass( "disable-scroll" );
        } )


        MainElement.header.sidebar.find( ".sidebar_menu" ).find( ".sidebar_menu--dropdown" ).each( function () {
            const t = $( this );
            t.on( "click", () => {
                t.find( '.sidebar_menu--child' ).stop().toggle("fast")
            } )
        } )


    },
    asideRunDay() {
        const run_day = $( '.run_day' );
        const birthday = new Date( Number( run_day.attr( 'data-birthday' ).replace( /,/g, "" ) ) );
        if ( birthday.toString() === 'Invalid Date' ) {
            run_day.html( '<span style="color:red">配置错误 0</span>' );
            return msg.error( '建站时间格式配置错误！' );
        }
        const day = (new Date() - birthday) / (1000 * 24 * 60 * 60);
        run_day.html( `${ parseInt( day ) } 天` );
    },
    scroll() {
        const navbar = MainElement.header.navbar;

        const asideWidget = MainElement.asideWidget;

        let scrollTop = 0;

        const onscroll = Utils.throttle( function () {
            const currentTop = window.scrollY || document.documentElement.scrollTop;
            if ( currentTop > 56 ) {
                if ( currentTop > scrollTop ) {
                    navbar.hasClass( "active-visible" ) && navbar.removeClass( "active-visible" );
                    asideWidget.addClass( "active" );
                } else {
                    !navbar.hasClass( "active-visible" ) && navbar.addClass( "active-visible" );
                }
                navbar.addClass( "active-fixed" );
            } else {
                !currentTop && navbar.removeClass( "active-fixed active-visible" );
                !currentTop && asideWidget.removeClass( "active" );
            }
            scrollTop = currentTop;
        }, 200 );

        window.addEventListener( 'scroll', onscroll );
    }

};


document.addEventListener( "DOMContentLoaded", () => Object.values( MainContext ).forEach( f => f() ) );
