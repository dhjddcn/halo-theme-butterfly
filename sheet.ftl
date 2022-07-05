<#include "template/layout.ftl">
<@layout
title="${sheet.title!}"
type="sheet"
top_background_img="${settings.top_sheet_background_img}"
enable_aside=settings.enable_sheet_aside
>
    ${sheet.formatContent!}
    <#include "template/common/comments.ftl">
    <@comment sheet,'sheet' />
</@layout>
