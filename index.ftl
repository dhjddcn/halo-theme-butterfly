<#include "template/layout.ftl">
<#include "template/common/pagination.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/empty.ftl">
<@layout
type="index"
top_background_img="${(settings.enable_top_index_background_img)?then('${settings.top_index_background_img}','')}" >
    <#if (posts.content)?? && posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination/>
    <#else>
        <@empty/>
    </#if>
</@layout>
