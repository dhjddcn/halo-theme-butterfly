/**
 * @Author: 小红
 * @Date: 2022/4/1
 * @createTime: 2022/4/1
 * @Description:
 */
document.onreadystatechange = function () {
    if ( this.readyState === 'interactive' ) {
        let loadingHtml = `<style>@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}.loading-left-bg,.loading-right-bg{position:fixed;z-index:1000;width:50%;height:100%;background-color:#37474f;}.loading-right-bg{right:0;}.spinner-box{position:fixed;z-index:1001;display:flex;justify-content:center;align-items:center;width:100%;height:100vh;}.spinner-l{width:150px;height:150px;border-radius:50%;background-image:linear-gradient(-225deg,#22E1FF 0%,#1D8FE1 48%,#625EB1 100%);position:relative;}.spinner-l::before{content:'';position:absolute;width:130px;height:130px;border-radius:50%;background-image:linear-gradient(-225deg,#22E1FF 0%,#1D8FE1 48%,#625EB1 100%);filter:blur(30px);animation:rotate .4s linear infinite;margin:auto;top:0;left:0;right:0;bottom:0;}.spinner-l::after{content:'加载中...';text-align:center;line-height:100px;font-weight:bold;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:100px;border-radius:50%;background-color:#000;}.loaded .loading-left-bg{transition:transform 0.5s;transform:translate(-100%,0);}.loaded .loading-right-bg{transition:transform 0.5s;transform:translate(100%,0);}.loaded .spinner-box{display:none;}</style><div class="loading"><div class="loading-left-bg"></div><div class="loading-right-bg"></div><div class="spinner-box"><div class="spinner-l"></div></div></div>`
        let div = document.createElement( 'div' );
        div.className = 'loading-div';
        div.innerHTML = loadingHtml;
        document.body.style.overflow = 'hidden';
        document.body.insertBefore( div, document.body.firstChild );
    }
    if ( this.readyState === "complete" ) {
        const loading = document.querySelector( '.loading-div' );
        loading.classList.add( 'loaded' );
        document.body.removeAttribute( 'style' );
        document.querySelector( '#Butterfly' ).removeAttribute( 'style' );
        setTimeout( function () {
            loading.remove();
            document.querySelector( '.loading-script' ).remove();
        }, 200 );
    }
};
