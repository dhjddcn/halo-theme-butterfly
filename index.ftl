<!DOCTYPE html>
<html lang="zh-CN" data-mode="light">
<head>
    <title>首页</title>
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
    <#if settings.index_enable_top_background_img>
        <header class="header">
            <section class="site-info">
                <h1 class="site_title">${blog_title!}</h1>

                <div class="site_subtitle">
                    <span class="T"></span>
                    <span class="typed-cursor" aria-hidden="true"></span>
                </div>

                <div class="site_icons">
                    <a href="${settings.github!}" target="_blank" title="github">
                        <i class="by-font by-icon-github"> </i>
                    </a>
                    <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=${settings.qq}&website=${blog_url!}"
                       title="QQ">
                        <i class="by-font by-icon-qq"> </i>
                    </a>
                    <a href="${settings.zhihu!}" target="_blank" title="知乎">
                        <i class="by-font by-icon-zhihu"> </i>
                    </a>
                    <a href="mailto:${settings.email!}" title="邮箱">
                        <i class="by-font by-icon-email"> </i>
                    </a>
                </div>

            </section>

            <section class="header-down">
                <i class="by-font by-icon-downArrow"></i>
            </section>

        </header>
    </#if>
    <nav class="nav">
        <section class="nav-title">
            <a href="/">
                ${blog_title!}
            </a>
        </section>

        <section class="nav-menus">
            <div class="search">
                <a href="">
                    <i class="by-font by-icon-search"></i>
                    <span>搜索</span>
                </a>

            </div>
            <span class="toggle">
                <a href="">
                    <i class="by-font by-icon-toggle"></i>
                </a>
            </span>

        </section>
    </nav>
    <main class="main"></main>
    <footer class="footer"></footer>
</div>

<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/index.min.js"></script>
</body>
</html>













