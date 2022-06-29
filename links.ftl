<#include "template/layout.ftl">
<#include "template/common/empty.ftl">

<@layout
title="${settings.links_title!}"
type="links"
top_background_img="${settings.top_links_background_img}"
enable_aside=settings.enable_links_aside
>
    <#if settings.links_type == 'group'>
        <@linkTag method="listTeams">
            <#list teams as team>
                <h3>${team.team}</h3>
                <#if team.links?? && team.links?size gt 0>
                    <div class="by_links_group">
                    <#list team.links?sort_by('priority') as link>
                        <a class="by_link_card" href="${link.url}" target="_blank" title="${link.name!}">
                            <div class="info">
                                <img src="${link.logo!}" alt="" onerror="this.src='${lazy_img}'">
                                <span>${link.name!}</span>
                            </div>
                            <div class="desc ">
                                ${link.description}
                            </div>
                        </a>
                    </#list>
                    </div>
                <#else>
                    <@empty showBg = false/>
                </#if>
            </#list>
        </@linkTag>
    <#else>
        <@linkTag method="list">
            <div class="by_links_group">
            <#list links?sort_by('priority') as link>
                <a class="by_link_card" href="${link.url}" target="_blank" title="${link.name!}">
                    <div class="info">
                        <img src="${link.logo!}" alt="" onerror="this.src='${lazy_img}'">
                        <span>${link.name!}</span>
                    </div>
                    <div class="desc ">
                        ${link.description}
                    </div>
                </a>
            </#list>
            </div>
        </@linkTag>
    </#if>

</@layout>
