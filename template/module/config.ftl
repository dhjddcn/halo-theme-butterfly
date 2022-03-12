<#-- 全局配置 -->
<script id="browser-Compatibility">
    <#-- 兼容性检查-->
    function detectIE() {
        let n = window.navigator.userAgent, e = n.indexOf( "MSIE " );
        if ( e > 0 ) {
            return parseInt( n.substring( e + 5, n.indexOf( ".", e ) ), 10 );
        }
        if ( n.indexOf( "Trident/" ) > 0 ) {
            let r = n.indexOf( "rv:" );
            return parseInt( n.substring( r + 3, n.indexOf( ".", r ) ), 10 );
        }
        let i = n.indexOf( "Edge/" );
        return i > 0 && parseInt( n.substring( i + 5, n.indexOf( ".", i ) ), 10 );
    }

    detectIE() && (alert( '当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。' ), (location.href = 'https://www.baidu.com'));
    document.getElementById( 'browser-Compatibility' ).remove();
</script>
<#global mode = (blog_url?index_of("127.0.0.1") == -1)?then('production', 'development')>
<#global BASE_RES_URL = (theme_base)>
<#if settings.loading_style != ''><script class="loading-script" src="${BASE_RES_URL}/source/lib/loading/${settings.loading_style!}.js"></script></#if>

<#global lazy_img = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' >
<#global err_img = theme_base+'/source/img/404.png' >
<#--定义可变属性，会根据页面的改变而变化  获取当前页面元数据，这里不要做解析-->
<script id="meta-config" type='text/javascript'>
    let PageAttr = {
        "metas": {
            <#if metas??>
            <#list metas?keys as key>
            "${key}": "${metas['${key}']}",
            </#list>
            </#if>
        },
    }
    document.getElementById( 'meta-config' ).remove();
</script>
<#--  取出主题配置  -->
<script id="theme-config">
    let ThemeConfig = {};
    <#list settings?keys as key>
    <#assign valueString = settings[key]?string>
    <#assign isNeeded = key?index_of('custom_')==-1 && valueString?index_of('<script')==-1 && valueString?index_of('<link')==-1>
    <#if isNeeded>
    var value = '${valueString?js_string}';
    value = value.replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
    if ( /^(true|false)$/.test( value ) ) {
        value = JSON.parse( value );
    }
    if ( /^\d+$/.test( value ) ) {
        value = Number( value );
    }
    ThemeConfig['${key}'] = value;
    ThemeConfig['description'] = '${user.description!}';
    ThemeConfig['BASE_RES_URL'] = '${BASE_RES_URL}';
    ThemeConfig['birthday'] = '${(settings.site_birthday?? && settings.site_birthday?trim != "")?then(settings.site_birthday?trim, options.birthday?replace(",",""))}';
    </#if>
    </#list>
    console.log( ThemeConfig );
    document.getElementById( 'theme-config' ).remove();
</script>


