<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>首页</title>
    <#include 'src/config.ftl' >
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/index.min.css">
    <style>
        body {
            --main-max-width: ${settings.main_max_width};
            --top_background_img: url( ${settings.index_top_background_img!});
        }
    </style>
</head>
<body>
<div id="Butterfly" class="index">

    <header class="header">
        <nav class="nav"></nav>

        <section class="header_site">
            <h1 class="blog_title">${blog_title!}</h1>
            <div class="blog_description">
                <span class="desc">${user.description!}</span>
                <span class="typed-cursor" aria-hidden="true">|</span>
            </div>
            <div class="blog_icons">
                <a href="${settings.github!}" target="_blank" title="github">
                    <i class="by-icon github"> </i>
                </a>

                <a href="${settings.github!}" target="_blank" title="github">
                    <i class="by-icon github"> </i>
                </a>

                <a href="${settings.github!}" target="_blank" title="github">
                    <i class="by-icon github"> </i>
                </a>

                <a href="${settings.github!}" target="_blank" title="github">
                    <i class="by-icon github"> </i>
                </a>
            </div>
        </section>
    </header>

    <main class="main aside_right">
        <section class="container"></section>
        <aside class="aside"></aside>
    </main>

    <footer class="footer"></footer>
</div>
<script type="text/javascript" src="${base_url}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url}/source/js/min/main.min.js"></script>
</body>
</html>













