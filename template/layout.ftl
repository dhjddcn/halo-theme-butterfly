<#--主题-->
<#include 'common/header.ftl' >
<#include 'common/footer.ftl' >
<#include 'module/link.ftl' >
<#include 'module/script.ftl' >
<#include 'common/aside.ftl' >
<#include 'common/rightside.ftl' >
<#macro layout title type  top_background_img >
    <!DOCTYPE html>
    <html lang="zh-CN" data-theme="light">
    <head>
        <title>${title}</title>
        <@link type=type />
        <@global.head />
    </head>
    <body style="background-image:url(${BASE_RES_URL!}/source/img/bg.jpg)">
    <div id="Butterfly">
        <#--  头部  -->
        <@header  title=title background_img=(top_background_img == '')?then(settings.random_img_api, top_background_img)/>
        <#assign by_enable_aside = (settings.enable_aside)?then('', 'by_enable_aside')>
        <#assign aside_position = (settings.aside_position == 'right')?then('', 'by_aside_position')>
        <main class="by_main_wrap by_${type} ${aside_position}" style="max-width:${settings.content_max_width}">
            <#-- 左边内容 -->
            <div class="by_box by_card_widget ${by_enable_aside}">
                <#nested >
            </div>
            <#--侧边栏-->
            <#if settings.enable_aside >
                <@aside/>
            </#if>
        </main>
        <#--   页脚 -->
        <@rightside  />
        <@footer  />
    </div>
    <@script  type=type/>
    </body>
    </html>
</#macro>













