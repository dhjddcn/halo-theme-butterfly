<#include "template/layout.ftl">
<@layout title="${sheet.title!}" type="" top_background_img="${settings.top_sheet_background_img}" >
    ${sheet.formatContent!}
    <@global.comment target=sheet type="sheet" />
</@layout>
