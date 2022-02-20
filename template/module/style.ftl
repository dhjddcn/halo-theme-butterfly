<style type="text/css">
    @font-face {
        font-family: "By Font";
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
    }
    html body {
        --theme: ${settings.theme_color_light!"#49b1f5"};
        font-family: "By Font", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "sans-serif";
    }
    html[data-mode='dark'] body {
        --theme: ${settings.theme_color_dark!"#1f1f1f"};
    }
    html body::after {
    <#if settings.body_background?contains("http")> background: url(${settings.body_background!}) no-repeat fixed center / cover;<#else>background:${settings.body_background!} </#if>
    }
</style>

