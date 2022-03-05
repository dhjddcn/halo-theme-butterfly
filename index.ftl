<!DOCTYPE html>
<html lang="zh-CN" data-mode="light">
<#include "template/module/head.ftl">
<@head type='index' title='${blog_title!}' />
<body style="overflow: hidden;">
<#include "template/common/loading.ftl">
<div id="by" class="index-page">
    <script src="${BASE_RES_URL!}/source/lib/jquery/jquery.min.js"></script>
    <#include "template/common/navbar.ftl">
    <main class="main">
        <article class="article">
            <#if (posts.content)?? && posts.content?size gt 0>
                <#include "template/common/post_list.ftl">
                <#list posts.content as post>
                    <@post_list post=post />
                </#list>
            <#--                <@pagination/>-->
            <#else>
            <#--                <@empty/>-->
            </#if>
        </article>
        <#include "template/common/aside.ftl">
    </main>
    <#include "template/common/footer.ftl">
    <#include "template/common/sideWidget.ftl">
</div>
<#include "template/module/script.ftl">
<@script type='index' />
</body>
</html>













