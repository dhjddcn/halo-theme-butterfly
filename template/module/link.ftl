<#-- link 资源-->
<#macro link type >
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="keywords" content="${meta_keywords!}">
    <meta name="description" content="${meta_description!}">
    <meta name="author" content="${user.nickname!}">
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <meta name="site" content="${blog_url!}">
    <meta property="og:description" content="${meta_description!}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:site_name" content="${blog_title!}">
    <meta property="og:url" content="${blog_url!}">
    <meta property="og:title" content="${title!} – ${blog_title!}">
    <meta property="twitter:partner" content="ogwp">
    <link rel="canonical" href="${blog_url!}">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/normalize.min.css"><#--    页面-->
    <link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_3123425_2ab3mcgk013.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/theme.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/global.min.css">
    <style type="text/css">
        @font-face {
            font-family: "By Font";
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        body #by .main {
            max-width: ${settings.content_max_width!};
        }

        html {
            --theme: ${settings.theme_color_light!};
            font-family: "By Font", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "sans-serif";
            --cursor-default: url(${BASE_RES_URL!}/source/cursor/simple_cursor/default.cur), auto;
            --cursor-link: url(${BASE_RES_URL!}/source/cursor/simple_cursor/link.cur), auto;
        }

        html[data-mode='light'] body::after {
        <#if settings.body_background?contains("http")> background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> background: ${settings.body_background!} </#if>
        }

        body #by .header {
        <#if type=='index'> background-image: url(${settings.top_index_background_img!});
        </#if>
        }


    </style>
    <#if type !='empty' >
        <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/${type}.min.css">
    </#if>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/responsive.min.css">
<#--    插件-->
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/animate/animate.min.css">
</#macro>


