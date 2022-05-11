/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: 首页
 */


const IndexContext = {
    init() {
        console.log( 111 );

    },
    subtitleTyping() {
        const subtitle = $( ".T" );
        if ( !subtitle.length ) return;

        new Typed( '.T', {
            strings: [ ThemeConfig.description ],
            startDelay: 300,
            typeSpeed: 200,
            loop: true,
            backSpeed: 50,
        } )
    }
};


!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( IndexContext ).forEach( f => f() );
    } );
})();
