<#-- 全局配置 -->
<script id="browser-Compatibility">
    function detectIE() {
        let e = window.navigator.userAgent, t = e.indexOf("MSIE ");
        if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        if (e.indexOf("Trident/") > 0) {
            let t = e.indexOf("rv:");
            return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)
        }
        let n = e.indexOf("Edge/");
        return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
    }

    detectIE() && (alert("当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。"), location.href = "https://www.baidu.com"), document.getElementById("browser-Compatibility").remove();
</script>
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
    document.getElementById('meta-config').remove();
</script>

<#global mode = (blog_url?index_of("127.0.0.1") == -1)?then('production', 'development')>
<#global base_url = (theme_base)>
<#global lazy_img = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=' >
<#global cover_img = theme_base+'/source/img/cover.png' >

<script id="theme-config">
    let ThemeConfig = {};
    <#list settings?keys as key>
    <#assign valueString = settings[key]?string>
    <#assign isNeeded = (key)?index_of('custom_')==-1 && valueString?index_of('<script')==-1 && valueString?index_of('<link')==-1>
    <#if isNeeded>
    var value = '${valueString?js_string}';
    value = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (/^(true|false)$/.test(value)) {
        value = JSON.parse(value);
    }
    if (/^\d+$/.test(value)) {
        value = Number(value);
    }
    ThemeConfig['${key}'] = value;
    </#if>
    </#list>
    ThemeConfig['description'] = '${user.description!}';
    ThemeConfig['base_url'] = '${base_url}';
    ThemeConfig['birthday'] = '${(settings.site_birthday?? && settings.site_birthday?trim != "")?then(settings.site_birthday?trim, options.birthday?replace(",",""))}';
    console.log(ThemeConfig);
    document.getElementById('theme-config').remove();
</script>

<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta name="format-detection" content="email=no">
<meta name="format-detection" content="telephone=no">
<meta content="no-siteapp">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="keywords" content="${meta_keywords!}">
<meta name="description" content="${meta_description!}">
<meta name="author" content="${user.nickname!}">
<meta content="on">
<meta name="site" content="${blog_url!}">
<meta property="og:description" content="${meta_description!}">
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="${blog_title!}">
<meta property="og:url" content="${blog_url!}">
<meta property="og:title" content="${blog_title!}">
<meta property="twitter:partner" content="ogwp">
<link rel="canonical" href="${blog_url!}">
<link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_3318283_s9x8xik6fdr.css">
<link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/theme.min.css">
<link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/global.min.css">
<link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/responsive.min.css">
<link rel="preload stylesheet" as="style" href="${base_url}/source/lib/animate/animate.min.css">
<@global.head />


<style>
    @font-face {
        font-family: "Butterfly Font";
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(${base_url!}/source/font/${settings.web_font!}) format("woff2");
    }

    html {
        --font-size: 14px;
        --font-family: "Butterfly Font", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "sans-serif";
        --theme: ${settings.theme_color!};
        --main-max-width: ${settings.main_max_width!};
        --cursor-default: url(${base_url!}/source/cursor/simple_cursor/default.cur), auto;
        --cursor-link: url(${base_url!}/source/cursor/simple_cursor/link.cur), auto;
    }
</style>
