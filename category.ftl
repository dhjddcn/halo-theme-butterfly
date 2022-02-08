<#include "template/layout.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/empty.ftl">
<#include "template/common/pagination.ftl">
<@layout
type="categories"
title="${category.name!}"
top_background_img="${category.thumbnail!}"
is_card = 'none-card'
>
    <#if posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination  method="categoryPosts" slug="${category.slug}" display="5" />
    <#else>
        <@empty  />
    </#if>
</@layout>
