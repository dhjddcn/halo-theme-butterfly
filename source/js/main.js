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
    asideRunDay() {
        const run_day = $( '.run_day' );
        const birthday = new Date( ThemeConfig.birthday.includes( '-' ) ? ThemeConfig.birthday : Number( ThemeConfig.birthday ) );
        if ( birthday.toString() === 'Invalid Date' ) {
            run_day.html( '<span style="color:red">配置错误 0</span>' );
            return msg.error( '建站时间格式配置错误！' );
        }
        const day = (new Date() - birthday) / (1000 * 24 * 60 * 60);
        run_day.html( `${ parseInt( day ) } 天` );
    },

};


!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( MainContext ).forEach( f => f() );
    } );
})();
