<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.journals_title!}"
type="journals"
top_background_img="${settings.top_journals_background_img!}"
enable_aside=settings.enable_journals_aside
>
    <#if settings.journals_style = "journals_liu">
        <#if journals.content?? && journals.content?size gt 0>
            <#list journals.content as journal>
                <div class="by_journal_item">
                    <time datetime="${journal.createTime?string('yyyy-MM-dd')}"
                        class="by_journal_item_meta">${journal.createTime?string('yyyy-MM-dd')}</time>
                    <div class="by_journal_item_content"> ${journal.content!}</div>
                </div>
            </#list>
        <#else>
            <@empty showBg = false/>
        </#if>
    <#else>
        <div class="is-container" id="moreContainer">
            <div id="ziyan-list">
                <div style="position: relative">
                    <#list journals.content as journal>
                        <div class="ziyan" style="transform-origin: center top;">
                            <div class="ziyan-content">
                                <div class="ziyan-header">
                                    <img class="ziyan_lazyload" src="${user.avatar!}" onerror="this.src='${err_img}'" alt="${user.nickname!}">
                                    <span class="ziyan-username">${user.nickname!}</span>
                                    <span class="is-verified-badge"></span>
                                    <span class="ziyan-text">·</span>
                                    <span class="ziyan-date time-ago" time=${journal.createTime?string("yyyy-MM-dd HH:mm:ss")}>${journal.createTime?string("yyyy/MM/dd HH:mm:ss")}</span>
                                </div>
                                <div class="ziyan-body markdown-body md-content">
                                    ${journal.content!}
                                </div>
                            </div>
                        </div>
                    </#list>
                </div>
            </div>
        </div>
    </#if>

</@layout>
