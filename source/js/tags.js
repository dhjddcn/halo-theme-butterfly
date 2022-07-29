/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: tags
 */


const TagsContext = {
    link() {
        const tags_links = $( ".tags_link" );
        const colors = [ '#22b344', '#7b284b', '#bcb54b', '#c40e32', '#a384ae', '#770625', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#407097' ];
        if ( !tags_links.length ) return;
        console.log( tags_links );

        tags_links.each( function () {
            this.style.color = colors[parseInt( Math.random() * 12 )];
            this.style.fontSize = `${ Math.random() * 35 }px`;
        } )

    }
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( TagsContext ).forEach( f => f() );
    } );
})();
