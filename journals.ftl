<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.journals_title!}"
type="journals"
top_background_img="${settings.top_journals_background_img!}"
enable_aside=settings.enable_journals_aside
>
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


</@layout>
