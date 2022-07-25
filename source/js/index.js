/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: 首页
 */


const IndexContext = {
    init() {
        // 箭头
        // $(".by_header__down").on('click', () => {
        //     $( "body,html" ).animate( { scrollTop: $( ".by_main" ).offset().top }, 500 );
        // });
        console.log( "首页" );
    },
    typed() {
        const dom = $( ".typed-text" );

        if ( !dom.length ) return;

        const customDesc = dom.attr( "data-custom-desc" );

        let strings = customDesc.replace( /\s*/g, "" ).split( '&&' );

        if ( !strings[0] ) strings = [ "请设置博客或者自定义描述!" ];

        window.typedText = new Typed( '.typed-text', {
            strings,
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
