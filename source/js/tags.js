/**
 * @Author: 小红
 * @Date: 2022/5/11
 * @createTime: 2022/5/11
 * @Description: tags
 */


const TagsContext = {
    link() {
        const tags_links = $(".tags_link");
        const colors = ["rgb(249, 235, 234)", "rgb(245, 238, 248)", "rgb(213, 245, 227)", "rgb(232, 248, 245)", "rgb(254, 249, 231)", "rgb(248, 249, 249)", "rgb(130, 224, 170)", "rgb(215, 189, 226)", "rgb(163, 228, 215)", "rgb(133, 193, 233)", "rgb(248, 196, 113)", "rgb(249, 231, 159)", "rgb(232, 248, 245)", "rgb(248, 249, 249)", "rgb(248, 249, 249)", "rgb(213, 245, 227)", "rgb(133, 193, 233)", "rgb(130, 224, 170)", "rgb(163, 228, 215)", "rgb(215, 189, 226)", "rgb(133, 193, 233)", "rgb(232, 248, 245)", "rgb(248, 196, 113)", "rgb(254, 249, 231)", "rgb(215, 189, 226)", "rgb(249, 231, 159)", "rgb(249, 231, 159)", "rgb(249, 231, 159)", "rgb(133, 193, 233)", "rgb(248, 249, 249)", "rgb(215, 189, 226)"];
        if (!tags_links.length) return;

        tags_links.each(function () {
            const color = parseInt((Math.random() * colors.length).toString());
            this.style.backgroundColor = colors[color];
        })

    }
};

!(function () {
    document.addEventListener("DOMContentLoaded", function () {
        Object.values(TagsContext).forEach(f => f());
    });
})();
