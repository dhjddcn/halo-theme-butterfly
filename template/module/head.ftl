<#macro head type='empty' title='' >
    <head>
        <#include 'config.ftl'>
        <#include 'link.ftl'>
        <@link type />
        <title>${title}</title>
        <script src="${BASE_RES_URL!}/source/lib/jquery/jquery.min.js"></script>
        <@global.head />
    </head>
</#macro>
