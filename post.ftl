<#include "template/layout.ftl">
<#assign thumbnail = post.thumbnail!?trim>
<#assign random_img_ok = settings.enable_top_random_img==true>
<#assign default_img_url = (random_img_ok == true)?then(settings.random_img_api + ((settings.random_img_api?index_of('?') != -1)?then('&', '?')) + '_r=' + post.id, post.thumbnail)>
<@layout title="${post.title!}" type="post"
top_background_img="${default_img_url!}"
enable_aside=settings.enable_post_aside
>
    ${post.formatContent!}
    <#include "template/common/postfooter.ftl">
<#--    <@global.comment target=post type="post" />-->
</@layout>
