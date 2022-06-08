/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: main
 */


const MainContext = {
    // 初始化
    init() {

    },

    // 滚动条相关
    scroll() {
        let position = 0;
        const navbar = $('.by_header__navbar');
        if (!navbar) return
        const handleScroll = () => {
            const currentTop = window.scrollY

            if (position > 0 && currentTop > 100) {
                if (position > currentTop) {
                    navbar.removeClass('active').addClass('down');
                } else {
                    navbar.addClass('active').removeClass('down');
                }
            } else {
                navbar.removeClass('active down');
            }
            position = currentTop;
        };

        document.addEventListener("scroll", Utils.throttle(handleScroll, 150));
    }

};


!(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Object.values(MainContext).forEach(f => f());
    });
})();
