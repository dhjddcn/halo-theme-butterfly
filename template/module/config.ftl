<#-- 全局配置 -->
<script id="compatiable-checker">
    <#-- 兼容性检查-->

    function detectIE() {
        var n = window.navigator.userAgent, e = n.indexOf( "MSIE " );
        if ( e > 0 ) {
            return parseInt( n.substring( e + 5, n.indexOf( ".", e ) ), 10 );
        }
        if ( n.indexOf( "Trident/" ) > 0 ) {
            var r = n.indexOf( "rv:" );
            return parseInt( n.substring( r + 3, n.indexOf( ".", r ) ), 10 );
        }
        var i = n.indexOf( "Edge/" );
        return i > 0 && parseInt( n.substring( i + 5, n.indexOf( ".", i ) ), 10 );
    };
    detectIE() && (alert( '当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。' ), (location.href = 'https://www.baidu.com'));
</script>

<#global mode = (blog_url?index_of("127.0.0.1") == -1)?then('production', 'development')>

<#global BASE_RES_URL = (theme_base)>
<#global lazy_img = theme_base+'/source/img/loading.gif' >
<#global err_img = theme_base+'/source/img/404.gif' >
<#--定义可变属性，会根据页面的改变而变化  获取当前页面元数据，这里不要做解析-->
<script id="metas-getter" type='text/javascript'>
    let PageAttr = {
        "metas": {
            <#if metas??>
            <#list metas?keys as key>
            "${key}": "${metas['${key}']}",
            </#list>
            </#if>
        },
    }
</script>

<#--  取出主题配置  -->
<script id="theme-config-getter">
    var ThemeConfig = {};
    <#list settings?keys as key>
    <#assign valueString = settings[key]?string>
    <#assign isNeeded = key?index_of('custom_')==-1 && valueString?index_of('<script')==-1 && valueString?index_of('<link')==-1>
    <#if isNeeded>
    var field = '${key}';
    var value = '${valueString?js_string}';
    value = value.replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
    if ( /^(true|false)$/.test( value ) ) {
        value = JSON.parse( value );
    }
    if ( /^\d+$/.test( value ) ) {
        value = Number( value );
    }
    ThemeConfig[field] = value;
    ThemeConfig['description'] = '${user.description!}';
    ThemeConfig['BASE_RES_URL'] = '${BASE_RES_URL}';


    window.By = {
        isMobile: /windows phone|iphone|android/gi.test( window.navigator.userAgent ),
        BASE_API: ""
    }
    </#if>
    </#list>

</script>


