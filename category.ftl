<#include "template/layout.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/empty.ftl">
<#include "template/common/pagination.ftl">
<@layout title="${category.name!}" top_background_img="${(category.thumbnail == '')?then(settings.top_index_background_img,category.thumbnail)}" >
    <#if posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination  method="categoryPosts" slug="${category.slug}" display="5" />
    <#else>
        <@empty  />
    </#if>
</@layout>
