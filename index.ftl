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
            <a href="/" class="site-title" title="${blog_title!}">${blog_title!}</a>

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
                <a href="" class="item">
                    <i class="by-font by-icon-search"></i>
                    <span>首页</span>
                </a>
                <a href="" class="item">分类</a>
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













