/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: main
 */


const MainContext = {
    //图片加载
    lazyLoad() {
        window.lazyLoadInstance = new LazyLoad({
            elements_selector: 'img', threshold: 0, data_src: 'lazy-src'
        });
    }, //主题
    dataTheme() {
        const body = $(document.body);
        body.attr("data-theme", localStorage.getItem("data-theme") || "light");
        const themeSwitch = $(".theme-switch")
        themeSwitch.on("click", () => {
            if (body.attr("data-theme") === 'light') {
                body.attr("data-theme", "dark");
                localStorage.setItem("data-theme", "dark");
            } else {
                body.attr("data-theme", 'light');
                localStorage.setItem('data-theme', 'light')
            }
        });


    }, // 滚动条相关
    scroll() {
        // let position = 0;
        // const navbar = $('.by_header__navbar');
        // const action = $('.by_action');
        // if (!navbar) return
        // const handleScroll = (e) => {
        //     if (!isScroll) return;
        //
        //     const currentTop = window.scrollY
        //
        //     if (position > 0 && currentTop > 100) {
        //         if (position > currentTop) {
        //             navbar.removeClass('active').addClass('down');
        //         } else {
        //             navbar.addClass('active').removeClass('down');
        //             action.addClass('active');
        //         }
        //     } else {
        //         navbar.removeClass('active down');
        //         action.removeClass('active');
        //     }
        //     position = currentTop;
        // };
        //
        // document.addEventListener("scroll", Utils.throttle(handleScroll, 150));
    }, action() {
        // const header = $('.by_header');
        // const search = $('.by-icon-search');
        // const mask = $('.by_header__mask');
        //
        // search.on('click', () => {
        //     header.addClass('search');   // 显示搜索框
        //     Utils.disableScroll();
        //
        //     $('.title-action > img').on('click', () => {
        //         header.removeClass('search');   // 隐藏搜索框
        //         Utils.enableScroll();
        //     })
        //
        // });
        //
        //
        // mask.on('click', () => {
        //     header.removeClass('search');   // 隐藏搜索框
        // });
    }

};


!(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Object.values(MainContext).forEach(f => f());
    });
})();