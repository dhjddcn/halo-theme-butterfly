<#include "template/layout.ftl">
<@layout title="${post.title!}" type="post"
top_background_img="${(post.thumbnail == '')?then(settings.top_index_background_img,post.thumbnail)}"
enable_aside=settings.enable_post_aside
>
    ${post.formatContent!}
    <#include "template/common/postfooter.ftl">
<#--    <@global.comment target=post type="post" />-->
</@layout>
