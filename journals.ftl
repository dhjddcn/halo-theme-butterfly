<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout title="日志" type="journals" top_background_img="${settings.top_index_background_img!}" >
    <#if journals.content?? && journals.content?size gt 0>
        <#list journals.content as journal>
            <div class="by_journal_item ">
                <time>
                    时间： ${journal.createTime?string('yyyy-MM-dd')}
                </time>
                <div class="by_journal_item_content ">
                    ${journal.content!}
                </div>
                <hr>
            </div>
        </#list>
    <#else>
        <@empty showBg = false/>
    </#if>
</@layout>
