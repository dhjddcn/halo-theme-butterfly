<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>${settings.archives_title!}</title>
    <#include 'template/config.ftl'>
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/archives.min.css">
    <style>
        body {
        <#if settings.body_background?contains("http")> --body-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> --body-background: ${settings.body_background!};
            --above_background_img: url(${settings.archives_above_background_img!settings.index_above_background_img});
        </#if>
        }
    </style>
</head>
<body data-theme="light" >
<div id="Butterfly" class="archives">
    <#include "template/macro.ftl">
    <#--头部-->
    <header class="header">
        <#if settings.archives_above_enable><@AbovePublic title=settings.archives_title!/></#if>
        <@Navbar/>
    </header>
    <#--主内容-->
    <main class="main animated ${settings.aside_position!}">
        <section class="container ${settings.archives_post_layout!} widget">
            <#if postCount gt 0>
                <#include "template/posts.ftl"><@PostArchives/>
            <#else>
                <@Empty/>
            </#if>
        </section>
        <#if settings.archives_aside_enable><#include "template/aside.ftl"></#if>
    </main>
    <#--底部-->
    <@Footer/>
    <@AsideWidget/>
</div>
<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/lazyLoad/lazyLoad.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/msg/msg.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/archives.min.js"></script>
</body>
</html>













