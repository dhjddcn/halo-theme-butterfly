<#--js-->
<#macro script  type>

    <script src="${BASE_RES_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>

    <#if type == 'index'>
        <script src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/effect/backdrop/silk.js"></script>
    </#if>

    <#if type == 'post' || type == 'journals'>
        <script src="${BASE_RES_URL!}/source/lib/clipboard/clipboard.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/qmsg/qmsg.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/jquery-qrcode/jquery.qrcode.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/tocbot/tocbot.min.js"></script>
        <script src="${BASE_RES_URL!}/source/lib/tocbot/tocbot.min.js"></script>
    </#if>

    <#if  type == 'categories'>
        <script src="${BASE_RES_URL!}/source/lib/echarts/echarts.min.js"></script>
    </#if>

<#-- 公共   -->
    <script src="${BASE_RES_URL!}/source/js/by.utils.js"></script>
    <script src="${BASE_RES_URL!}/source/js/by.common.js"></script>

    <#if type == 'post' || type == 'journals'>
        <script src="${BASE_RES_URL!}/source/lib/prism/prism.min.js"></script>
    </#if>

<#-- 页面   -->
    <#if type != "" &&  type != "false" >
        <script src="${BASE_RES_URL!}/source/js/by.${type}.js"></script>
    </#if>


</#macro>

