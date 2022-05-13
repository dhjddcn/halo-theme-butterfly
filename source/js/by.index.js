/**
 * @Description: 首页
 * @author: 小红
 * @date: 2022/1/6
 * @fileName: by.index
 */

const IndexContext = {
    scrollDown() {
        // noinspection JSCheckFunctionSignatures
        $( ".by_scroll_down_effects" ).click( ( e ) => $( "body" ).animate( { scrollTop: $( ".by_main_wrap" ).offset().top }, 700 ) );
    },
    //打字效果
    subtitleTyping() {
        const subtitle = $( ".by_site_subtitle > .subtitle" );
        if ( !subtitle.length ) return;
        var description = []
        if ( ThemeConfig.description ) {
          description = ThemeConfig.description.split(';');
        }
        new Typed( '.by_site_subtitle > .subtitle', {
            strings: description,
            startDelay: 300, // 开始之前延迟
            typeSpeed: 150, // 打印速度
            loop: true, // 是否循环
            backSpeed: 50,
        } )
    },
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( IndexContext ).forEach( f => f() );
    } );
})();


