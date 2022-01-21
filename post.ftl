<#include "template/layout.ftl">
<@layout title="${post.title!}" type="post" top_background_img="${post.thumbnail!}" >
    ${post.formatContent!}
    <#include "template/common/postfooter.ftl">
<#--    <@global.comment target=post type="post" />-->
</@layout>
