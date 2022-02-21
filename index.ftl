<!DOCTYPE html>
<html lang="zh-CN" data-mode="light">
<#include "template/module/head.ftl">
<#include "template/module/script.ftl">
<@head type='index' title='${blog_title!}' />
<body>
<div id="by" class="page-index">
    <#include "template/common/navbar.ftl">
    <main class="by_main" style="height:2000px">内容
    </main>
    <#include "template/common/footer.ftl">
    <#include "template/common/sideWidget.ftl">
</div>
<@script type='index' />
</body>
</html>













