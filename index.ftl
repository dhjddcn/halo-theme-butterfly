<!DOCTYPE html>
<html lang="zh-CN" data-mode="light">
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
<body>
<div id="Butterfly" class="index">

    <header class="header">
        <section class="navbar">
            <a href="${blog_url!}" class="site-title" title="${blog_title!}">${blog_title!}</a>

            <div class="action">
                <a class="search item" href="javascript:void(0)">
                    <i class="by-font by-icon-search"></i>
                    <span>搜索</span>
                </a>
                <a class="toggle item" href="javascript:void(0)">
                    <i class="by-font by-icon-toggle"></i>
                </a>
            </div>


            <nav class="menus">
                <@menuTag method="tree"><#assign menuList=menus></@menuTag>

                <@menuTag method="tree">

                    <#list menuList?sort_by('priority') as menu>
                        <#if menu.children?? && menu.children?size gt 0>
                        <#else>
                            <a href="${menu.url}" target="${menu.target!}" title="${menu.name}"
                               class="item">
                                <#if  menu.icon?? && menu.icon!=''>
                                    <i class="${menu.icon}"></i>
                                </#if>
                                <span>${menu.name}</span>
                            </a>
                        </#if>

                    </#list>
                </@menuTag>



            </nav>

        </section>

        <section class="site-info"></section>

        <section class="scroll-down"></section>
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













