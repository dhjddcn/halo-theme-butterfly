/**
 * @Description: 日志
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.journals
 */

const journalsContext = {
    initTagBg() {
        const $journals = $( '.by_tag' );
        const colors = [ '#F9EBEA', '#F5EEF8', '#D5F5E3', '#E8F8F5', '#FEF9E7', '#F8F9F9', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#FFF' ];
        if ( !$journals.length ) return;

        $journals.each( function () {
            $( this ).css( { background: colors[parseInt( Math.random() * 12 )] } )
        } )
    },
    chart() {
        // const $categories = $( '.by_category' );
        //
        // if ( !$categories.length ) return;
        // let c = echarts.init( document.getElementById( 'chart' ) );




        // c.setOption( option );
    }
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( journalsContext ).forEach( f => f() );
    } );
})();


