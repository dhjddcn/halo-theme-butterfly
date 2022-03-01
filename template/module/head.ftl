<#macro head type='empty' title='' >
    <head>
        <#include 'config.ftl'>
        <#include 'link.ftl'>
        <@link type />
        <title>${title}</title>
        <@global.head />
    </head>
</#macro>
