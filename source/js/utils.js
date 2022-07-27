/**
 * @Description: 工具
 * @author: 小红
 * @date: 2022/1/16
 * @fileName: by.utils
 */

// 是否启用滚动
let isScroll = true;

class Utils {
    // 防抖
    static debounce(fn, delay) {
        let t = null;
        return function () {
            if (t !== null) {
                clearTimeout(t)
            }
            t = setTimeout(() => {
                fn.call(this, arguments);
            }, delay)
        }
    }

    // 节流
    static throttle(fn, delay) {
        let flag = true;
        return function () {
            if (flag) {
                setTimeout(() => {
                    fn.call(this, arguments);
                    flag = true;
                }, delay)
            }
            flag = false;
        }
    }

    static getRandomColor() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }

    // 禁止页面滚动
    static disableScroll() {
        isScroll = false;
        let top = $(document).scrollTop();
        $(document).on('scroll.unable', function (e) {
            $(document).scrollTop(top);
        })
    }

    // 允许页面滚动
    static enableScroll() {
        isScroll = true;
        $(document).unbind("scroll.unable");
    }


}
