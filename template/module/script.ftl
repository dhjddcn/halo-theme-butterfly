<#--js-->
<#macro script  type>
    <script src="${BASE_RES_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>

<#--加载-->
<#--    <script src="${BASE_RES_URL!}/source/lib/pace/pace.min.js"></script>-->
<#--背景-->
    <script src="${BASE_RES_URL!}/source/lib/effect/backdrop/silk.js"></script>

    <#if type == 'index' && (settings.enable_top_background_img &&   settings.enable_top_index_background_img)>
        <script src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script>
    </#if>

    <#if type == 'post' || type == 'journals'>
<#--        <script src="${BASE_RES_URL!}/source/lib/prism/prism.min.js"></script>-->
        <script src="${BASE_RES_URL!}/source/lib/clipboard/clipboard.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/qmsg/qmsg.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/jquery-qrcode/jquery.qrcode.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/tocbot/tocbot.min.js"></script>
    </#if>

    <#if  type == 'categories'>
        <script src="${BASE_RES_URL!}/source/lib/echarts/echarts.min.js"></script>
    </#if>



<#-- 开发   -->
    <#if  mode == 'development'>
        <script src="${BASE_RES_URL!}/source/js/by.utils.js"></script>
        <script src="${BASE_RES_URL!}/source/js/by.common.js"></script>
        <#if  type !='sheet'>
            <script src="${BASE_RES_URL!}/source/js/by.${type}.js"></script>
        </#if>
    </#if>

<#-- 线上  -->
    <#if  mode == 'production'>
        <script src="${BASE_RES_URL!}/source/js/min/by.utils.min.js"></script>
        <script src="${BASE_RES_URL!}/source/js/min/by.common.min.js"></script>
        <#if  type !='sheet'>
            <script src="${BASE_RES_URL!}/source/js/min/by.${type}.min.js"></script>
        </#if>
    </#if>

    <#if type == 'post' || type == 'journals'>
        <script src="${BASE_RES_URL!}/source/lib/prism/prism.min.js"></script>
    </#if>



</#macro>

