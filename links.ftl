<#include "template/layout.ftl">
<#include "template/common/empty.ftl">

<@layout title="友情链接" type="links" top_background_img="${settings.top_links_background_img}" >
    <@linkTag method="list">
        <#if links?? && links?size gt 0>
            <#list links as link>
                <a class="by_link_card hvr-grow" href="${link.url}" target="_blank" title="${link.name!}">
                    <div class="info">
                        <img src="${link.logo!}" alt="">
                        <span>${link.name!}</span>
                    </div>
                    <div class="desc ">
                        ${link.description}
                    </div>
                </a>
            </#list>
        <#else>
            <@empty showBg = false/>
        </#if>
    </@linkTag>

</@layout>
