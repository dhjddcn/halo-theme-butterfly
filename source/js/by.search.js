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
};

!(function () {
  document.addEventListener( "DOMContentLoaded", function () {
      Object.values( searchContext ).forEach( f => f() );
  } );
})();


