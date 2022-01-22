<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.tags_title!}"
type="tags"
top_background_img="${settings.top_tags_background_img}"
enable_aside=settings.enable_tags_aside
>
    <@tagTag method="list">
        <#if tags?? && tags?size gt 0>
            <#list tags as tag>
                <a class="by_tag hvr-float-shadow" href="${tag.fullPath!}"
                   title="${tag.name!}">
                    ${tag.name!}
                    <span>${tag.postCount!}</span>
                </a>
            </#list>
        <#else>
            <@empty showBg = false/>
        </#if>
    </@tagTag>

    <div class="by_tag_echarts">
        <div id="chart"></div>
    </div>
</@layout>
