<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>${blog_title!}</title>
    <#include 'template/config.ftl'>
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/index.min.css">
    <style>
        body {
        <#if settings.body_background?contains("http")> --body-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> --body-background: ${settings.body_background!};
            --top-background-img: url(${settings.index_above_background_img!});
        </#if>
        }
    </style>
</head>
<body data-theme="light">
<div id="Butterfly" class="index">
    <#include "template/macro.ftl">
    <#--头部-->
    <header class="header">
        <@Navbar/>
        <#if settings.index_above_enable><@AboveIndex/></#if>
    </header>
    <#--主内容-->
    <main class="main animated ${settings.aside_position!}">
        <section class="container ${settings.index_post_layout!}">
            <#if postCount gt 0>
                <#include "template/posts.ftl"><@PostPublic  method="index"  display="${settings.index_page!}"  />
            <#else>
                <@Empty/>
            </#if>
        </section>
        <#if settings.index_aside_enable><#include "template/aside.ftl"></#if>
    </main>
    <#--底部-->
    <@Footer/>
    <@AsideWidget/>
</div>
<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/lazyLoad/lazyLoad.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/msg/msg.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/index.min.js"></script>
</body>
</html>













