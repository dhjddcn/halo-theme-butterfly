<#include "template/layout.ftl">
<#include "template/common/pagination.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/empty.ftl">
<@layout
type="index"
top_background_img="${settings.top_index_background_img!}"
enable_aside=settings.enable_home_aside
is_card = 'none-card'
>
    <#if (posts.content)?? && posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination/>
    <#else>
        <@empty/>
    </#if>
</@layout>
