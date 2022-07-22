/**
 * @Description: 搜索
 * @author: 陈十一
 * @date: 2022年6月8日
 * @fileName: by.search
 */

 const searchContext = {
  //分享微信二维码
  initSearch() {
      const $search = $( '.by_search' );
      if ( !$search.length ) return;
      $search.click(function(){
        $('.by_local_search').show()
      })
      const $close = $( '.search_close' );
      if ( !$close.length ) return;
      $close.click(function(){
        $('.by_local_search').hide()
      })
  },
  initTagBg() {
    const $tags = $( '.by_tag' );
    const colors = [ '#F9EBEA', '#F5EEF8', '#D5F5E3', '#E8F8F5', '#FEF9E7', '#F8F9F9', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#FFF' ];
    if ( !$tags.length ) return;

    $tags.each( function () {
        $( this ).css( { background: colors[parseInt( Math.random() * colors.length )] } )
    } )
  },
};

!(function () {
  document.addEventListener( "DOMContentLoaded", function () {
      Object.values( searchContext ).forEach( f => f() );
  } );
})();


