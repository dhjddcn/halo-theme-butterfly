/**
 * @Description: 通用逻辑
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: main.js
 */
const html = $( "html" );

const MainContext = {
    init() {
        // console.log( 1111 );
    }
};
!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( MainContext ).forEach( f => f() );
    } );
})();
