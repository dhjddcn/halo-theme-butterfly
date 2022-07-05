<#include "template/layout.ftl">
<@layout
title="${sheet.title!}"
type="sheet"
top_background_img="${settings.top_sheet_background_img}"
enable_aside=settings.enable_sheet_aside
>
    ${sheet.formatContent!}
    <#if settings.sheet_comment!false>
        <#include "template/common/comments.ftl">
        <@comment sheet,'sheet' />
    </#if>
</@layout>
