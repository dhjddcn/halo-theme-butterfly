/**
 * @Description: 首页
 * @author: 小红
 * @date: 2022/1/6
 * @fileName: by.index
 */

const IndexContext = {
    scrollDown() {
        // noinspection JSCheckFunctionSignatures
        // $( ".by_scroll_down_effects" ).click( ( e ) => $( "body" ).animate( { scrollTop: $( ".by_main_wrap" ).offset().top }, 700 ) );
    },
    //打字效果
    subtitleTyping() {
        const subtitle = $( ".subtitle" );
        if ( !subtitle.length ) return;

        // fetch( 'https://v2.jinrishici.com/one.json' ).then( ( r ) => {
        //     console.log( r.data )
        // } )

        $.get( "https://v2.jinrishici.com/one.json", function ( data, status ) {
            let arr = data.data?.origin ? data.data.origin.content : []

            new Typed( '.subtitle', {
                strings: [ ThemeConfig.description, ...arr ],
                startDelay: 300,
                typeSpeed: 200,
                loop: true,
                backSpeed: 50,
            } )

        } );


    },
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( IndexContext ).forEach( f => f() );
    } );
})();


