<#--js-->
<#macro script type>
<#--    插件-->
    <script src="${BASE_RES_URL!}/source/lib/wowjs/wow.min.js"></script>
<#--<script src="${BASE_RES_URL!}/source/lib/qmsg/qmsg.js"></script>-->
    <script src="${BASE_RES_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>
    <script src="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
<#--页面-->
    <script src="${BASE_RES_URL}/source/js/min/utils.min.js"></script>
    <script src="${BASE_RES_URL}/source/js/min/common.min.js"></script>
    <#if type == 'index' >
        <script src="${BASE_RES_URL!}/source/lib/typed/typed.min.js"></script></#if>
    <#if type !='empty' >
        <script src="${BASE_RES_URL}/source/js/min/${type}.min.js"></script></#if>
</#macro>

