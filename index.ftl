<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>首页 ~ ${blog_title!}</title>
    <#include 'template/config.ftl'>
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/index.min.css">
    <style>
        body {
        <#if settings.body_background?contains("http")> --body-background: url(${settings.body_background!}) no-repeat fixed center / cover;
        <#else> --body-background: ${settings.body_background!};
            --top-background-img: url(${settings.index_top_background_img});
        </#if>
        }
    </style>
</head>
<body data-theme="light">
<div id="Butterfly" class="index">
    <@menuTag method="tree"><#assign menuList=menus></@menuTag>
    <header class="by_header">
        <section class="by_header__container">

            <a href="${blog_url!}" class="by_header__title" title="${blog_title!}">
                ${blog_title!}
            </a>

            <nav class="by_header__nav">
                <#list menuList?sort_by('priority') as menu>
                    <#if menu.children?? && menu.children?size gt 0>
                        <div class="by_dropdown">
                            <a class="item" href="javascript:" target="${menu.target!}" title="${menu.name}">
                                <i class="${menu.icon}"></i>
                                ${menu.name}
                                <i class="by-font by-icon-downArrow"></i>
                            </a>
                            <nav class="by_dropdown__menu">
                            </nav>
                        </div>
                    <#else>

                        <a class="item" href="${menu.url}" target="${menu.target!}" title="${menu.name}">
                            <#if  menu.icon?? && menu.icon!=''>
                                <i class="${menu.icon}"></i>
                            </#if>
                            ${menu.name}
                        </a>

                    </#if>
                </#list>

            </nav>

            <div class="by_header__action"></div>

        </section>

    </header>

    <main class="main"></main>

    <footer class="footer"></footer>
</div>

<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/index.min.js"></script>
</body>
</html>













