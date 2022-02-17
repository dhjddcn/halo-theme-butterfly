<#-- link 资源-->
<#include "config.ftl">
<#macro link type top_background_img>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="keywords" content="${meta_keywords!}">
    <meta name="description" content="${meta_description!}">
    <meta name="author" content="${user.nickname!}">
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <meta name="site" content="${blog_url!}">
    <meta property="og:image" content="${options.blog_favicon!}">
    <meta property="og:description" content="${meta_description!}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:site_name" content="${blog_title!}">
    <meta property="og:url" content="${blog_url!}">
    <meta property="og:title" content="${title!} – ${blog_title!}">
    <meta property="twitter:partner" content="ogwp">
    <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
    <link rel="canonical" href="${blog_url!}">
    <link rel="apple-touch-icon" sizes="180x180" href="${options.blog_favicon!}">
    <script src="${BASE_RES_URL!}/source/lib/jquery/jquery.min.js"></script>
    <#if type == 'post' || type == 'journals' >
    <#--代码块 -->
        <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/prism/prism.min.css">
        <link rel="preload stylesheet" as="style"
              href="${BASE_RES_URL!}/source/lib/prism/themes/prism-${settings.code_theme!}.css">
    <#--图片预览-->
        <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.css">
    <#--弹窗-->
        <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/qmsg/qmsg.css">
    </#if>

<#--动画-->
<#--&lt;#&ndash;效果&ndash;&gt;-->
<#--    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/hover/hover-min.css">-->
<#--主题-->

    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.theme.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.global.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.responsive.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.widget.min.css">

    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/animate/animate.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/lib/pace/pace-theme-flash.min.css">

    <#if  type !='sheet'>
        <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.${type}.min.css">
    </#if>


    <style type="text/css">
        @font-face {
            font-family: "Butterfly Font";
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        <#--body背景颜色/图-->
        html {
        <#if settings.body_background?contains("http")> --global-bg: url(${settings.body_background!}) no-repeat fixed center / 100%;
        <#else> --global-bg: ${settings.body_background!};
        </#if>
        }

        <#--顶部背景处理-->
        <#if settings.enable_top_background_img  &&  settings['enable_top_${type}_background_img'] >
        html #Butterfly header {
            background-image: url(${(top_background_img == '')?then(settings.top_index_background_img,top_background_img)})
        }
        <#else>
        html #Butterfly header {height: 60px;}
        html #Butterfly header::before {display: none;}
        </#if>
        <#--最大内容宽度-->
        #Butterfly .by_main {
            max-width: ${settings.content_max_width!}
        }

        <#--侧边栏翻转-->
        <#if settings.aside_position == 'left' >
        #Butterfly .by_main {
            flex-direction: row-reverse;
        }

        #Butterfly .by_main .by_aside {
            padding: 0 15px 0 0;
        }

        </#if>
        <#--导航栏居中-->
        <#if settings.nav_center  >
        #Butterfly .by_nav .by_search  {
            flex: 1;
            text-align: right;
        }
        </#if>
    </style>

</#macro>


