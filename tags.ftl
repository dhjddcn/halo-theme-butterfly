<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>${settings.tags_title!}</title>
    <#include 'template/config.ftl'>
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/tags.min.css">
    <style>
        body {
        <#if settings.body_background?contains("http")> --body-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> --body-background: ${settings.body_background!};
            --above_background_img: url(${settings.tags_above_background_img!settings.index_above_background_img});
        </#if>
        }
    </style>
</head>
<body data-theme="light">
<div id="Butterfly" class="tags">
    <#include "template/macro.ftl">
    <#--头部-->
    <header class="header">
        <#if settings.tags_above_enable><@AbovePublic title=settings.tags_title!/></#if>
        <@Navbar/>
    </header>
    <#--主内容-->
    <main class="main animated ${settings.aside_position!}">
        <section class="container ${settings.tags_post_layout!} widget">
            <@tagTag method="list">
                <#if tags?? && tags?size gt 0>
                    <#list tags as tag>
                        <a class="tags_link" href="${tag.fullPath!}"
                           title="${tag.name!}">
                            ${tag.name!}
                            <span class="num">${tag.postCount!}</span>
                        </a>
                    </#list>
                <#else>
                    <@Empty/>
                </#if>
            </@tagTag>
        </section>
        <#if settings.tags_aside_enable><#include "template/aside.ftl"></#if>
    </main>
    <#--底部-->
    <@Footer/>
    <@AsideWidget/>
</div>
<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/lazyLoad/lazyLoad.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/tags.min.js"></script>
</body>
</html>













