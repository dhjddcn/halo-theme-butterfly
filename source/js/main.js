/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: main
 */
const MainContext = {
    //图片加载
    lazyLoad() {
        window.lazyLoadInstance = new LazyLoad( {
            elements_selector: 'img', threshold: 0, data_src: 'lazy-src'
        } );
    }, //主题
    dataTheme() {
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
    },
    navbar() {
        const action = $( ".navbar > .action" );
        const search = $( ".header > .search" );
        const close = $( ".header > .search  .close,.header > .mask" );
        const body = $( document.body );
        $( action ).children( ":first" ).on( "click", () => {
            body.addClass( "disable-scroll" );
            search.show().css( { "animation": " 0.5s  search-scale-show" } );
        } )
        close.unbind( "click" ).click( () => {
            body.removeClass( "disable-scroll" );
            search.css( { "animation": " 0.5s  search-scale-hide" } );
            setTimeout( () => {
                search.hide();
            }, 500 )
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
        const navbar = $( '.navbar' );

        const asideWidget = $( '.aside_widget' );

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


!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( MainContext ).forEach( f => f() );
    } );
})();
