<#--主题-->
<#include 'common/header.ftl' >
<#include 'common/footer.ftl' >
<#include 'module/link.ftl' >
<#include 'module/style.ftl' >
<#include 'module/script.ftl' >
<#include 'common/aside.ftl' >
<#include 'common/rightside.ftl' >
<#--
type 页面类型
top_background_img 顶部背景图
enable_aside 是否显示侧边栏
is_card 是否显示卡片
-->
<#macro layout  top_background_img  type  is_card = '' title="${blog_title!}" enable_aside = true>
    <!DOCTYPE html>
    <html lang="zh-CN" data-theme="light">
    <head>
        <title>${title}</title>
        <@link type=type />
        <@global.head />
        <@style   type top_background_img />
    </head>
    <body>
    <div id="Butterfly" class="by_${type}">
        <@header type  title top_background_img    />
        <main class="by_main">
            <div class="by_container ${( !settings.enable_aside || !enable_aside)?then('w-100','')}  ${is_card}">
                <#nested >
            </div>
            <#if settings.enable_aside && enable_aside >
                <@aside/>
            </#if>
        </main>
        <@footer  />
        <@rightside  />
    </div>
    <@script  type=type/>
    </body>
    </html>
</#macro>













