<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
    <#include 'template/head.ftl'>
    <title>${blog_title}</title>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/index.min.css">
    <style>
        body {
        <#if settings.body_background?contains("http")>
            --theme-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else>
            --theme-background: ${settings.body_background!};
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
    <main class="main ${settings.aside_position!} ${settings.index_post_layout!}">
        <section class="main_content">
            13246789
        </section>
        <aside class="main_aside"></aside>
    </main>
    <#include "template/footer.ftl">
</div>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/lazyLoad/lazyLoad.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/index.min.js"></script>
<#--<script type="text/javascript" async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>-->
<#--<script src="//code.tidio.co/us3plaexyjqa3hkht3rrh4n3sdu7ovia.js" ></script>-->
</body>
</html>













