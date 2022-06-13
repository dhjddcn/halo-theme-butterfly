/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: 首页
 */


const IndexContext = {
    init() {
        // 箭头
        $(".by_header__down").on('click', () => {
            $( "body,html" ).animate( { scrollTop: $( ".by_main" ).offset().top }, 500 );
        });
    },
    subtitleTyping() {
        const subtitle = $(".sub-text");
        if (!subtitle.length) return;

        new Typed('.sub-text', {
            strings: [ThemeConfig.description],
            startDelay: 300,
            typeSpeed: 200,
            loop: true,
            backSpeed: 50,
        })
    }
};


!(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Object.values(IndexContext).forEach(f => f());
    });
})();
