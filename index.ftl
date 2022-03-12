<!DOCTYPE html>
<html lang="zh-CN" data-mode="light">
<#include "template/module/head.ftl">
<@head type='index' title='${blog_title!}' >
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/index.min.css">
</@head>
<body>
<div id="Butterfly" class="index-page">
    <#include "template/common/navbar.ftl">
    <main class="main ${settings.index_post_layout!}">
        <article class="article">
            <#if (posts.content)?? && posts.content?size gt 0>
                <#include "template/common/post_list.ftl">
                <@post_list list=posts.content  display="${settings.index_page!}" />
            <#else>
                <#include "template/common/empty.ftl">
                <@empty/>
            </#if>
        </article>
        <#include "template/common/aside.ftl">
    </main>
    <#include "template/common/footer.ftl">
    <#include "template/common/sideWidget.ftl">
</div>

<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script>
<#include "template/module/script.ftl">
<script type="text/javascript" src="${BASE_RES_URL}/source/js/min/index.min.js"></script>
</body>
</html>













