<#--js-->
<#macro script type>
<#--    插件-->
<script src="${BASE_RES_URL!}/source/lib/wowjs/wow.min.js"></script>
<script src="${BASE_RES_URL!}/source/lib/qmsg/qmsg.js"></script>
<script src="${BASE_RES_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>
<script src="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
<#--页面-->
    <script src="${BASE_RES_URL}/source/js/min/by.utils.min.js"></script>
    <script src="${BASE_RES_URL}/source/js/min/by.common.min.js"></script>
    <#if type !='empty' >
        <script src="${BASE_RES_URL}/source/js/min/by.${type}.min.js"></script>
    </#if>
</#macro>

