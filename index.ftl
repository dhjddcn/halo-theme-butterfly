<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
    <#include 'template/head.ftl'>
    <title>${blog_title}</title>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/index.min.css">
    <style>
        @font-face {
            font-family: "Butterfly Font";
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        html {
        <#if settings.body_background?contains("http")> --body-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> --body-background: ${settings.body_background!};
            --top-background-img: url(${settings.index_top_background_img});
        </#if>
        }
    </style>
</head>
<body>
<div id="Butterfly">
    <header class="header">
    </header>
    <#include "template/navbar.ftl">
    <div class="container_box">
        <main class="main"></main>
        <aside class="aside"></aside>
    </div>
    <footer class="footer">
        <section class="content"></section>
        <section class="action"></section>
    </footer>
</div>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/lazyLoad/lazyLoad.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/index.min.js"></script>
<script type="text/javascript" async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<#--<script src="//code.tidio.co/us3plaexyjqa3hkht3rrh4n3sdu7ovia.js" ></script>-->
</body>
</html>













