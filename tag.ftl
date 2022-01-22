<#include "template/layout.ftl">
<#include "template/common/post_list.ftl">
<#include "template/common/pagination.ftl">
<#include "template/common/empty.ftl">


<@layout title="${tag.name!}"  top_background_img="${tag.thumbnail!}" >
    <#if posts.content?size gt 0>
        <#list posts.content as post>
            <@post_list post=post />
        </#list>
        <@pagination  method="tagPosts" slug="${tag.slug}" display="5" />
    <#else>
        <@empty  />
    </#if>
</@layout>
