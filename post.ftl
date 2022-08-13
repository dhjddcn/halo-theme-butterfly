<#include "template/layout.ftl">
<@layout title="${post.title!}" type="post"
top_background_img="${(post.thumbnail == '')?then(settings.top_index_background_img,post.thumbnail)}"
enable_aside=settings.enable_post_aside
>
    <#if post.title??><h1>${post.title}</h1></#if>
    ${post.formatContent!}
    <#include "template/common/postfooter.ftl">
<#--    <@global.comment target=post type="post" />-->
</@layout>
