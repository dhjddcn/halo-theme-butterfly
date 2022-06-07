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
        let position = $(document).scrollTop();
        const navbar = $('.by_header__navbar');
        let initTop = 0;
        if (!navbar) return

        //滚动方向
        function scrollDirection(currentTop) {
            const result = currentTop > initTop // true is down & false is up
            initTop = currentTop
            return result
        }

        const handleHeader = () => {
            const currentTop = window.scrollY || document.documentElement.scrollTop;
            const isDown = scrollDirection(currentTop);

            if (currentTop > 56) {
                if (isDown) {
                    if (!navbar.hasClass('active')) navbar.addClass('active');
                } else {
                    if (navbar.hasClass('active')) navbar.removeClass('active');
                }
                navbar.addClass('down');
            } else {
                if (currentTop === 0) {
                    navbar.removeClass('active down');

                }
            }

        };


        document.addEventListener("scroll", Utils.throttle(handleHeader, 200));
    }

};


!(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Object.values(MainContext).forEach(f => f());
    });
})();
