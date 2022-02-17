<#include "template/layout.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/pagination.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.search_title!}"
type='search'
top_background_img="${settings.top_sheet_background_img!}"
is_card = 'none-card'
>
    <#if posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination keyword="${keyword}"  method="search"  display="5" />
    <#else>
        <@empty  />
    </#if>
</@layout>
