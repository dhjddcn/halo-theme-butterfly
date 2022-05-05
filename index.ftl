<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <#include 'src/head.ftl' >
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/index.min.css">
    <title>首页</title>
</head>
<body>
<div id="Butterfly" class="index-page">
    <header class="header">

        <div class="site">
            <h1 class="title">${blog_title!}</h1>
            <section class="subtitle">
                <span class="description">${user.description!}</span>
                <span class="typed-cursor" aria-hidden="true"> |</span>
            </section>

            <section class="icons">
                <a href="${settings.github!}" target="_blank" class="icon_link" title="github">
                    <i class="butterfly-iconfont github"> </i>
                </a>
                <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=${settings.qq}&website=${blog_url!}"
                   class="icon_link" title="QQ">
                    <i class="butterfly-iconfont qq"> </i>
                </a>
                <a href="${settings.zhihu!}" target="_blank" class="icon_link" title="知乎">
                    <i class="butterfly-iconfont zhihu"> </i>
                </a>
                <a href="mailto:${settings.email!}" class="icon_link" title="邮箱">
                    <i class="butterfly-iconfont email"> </i>
                </a>
            </section>
        </div>

    </header>

    <nav class="nav"></nav>

    <main class="layout">
        <section class="container"></section>
        <aside class="aside"></aside>
    </main>

    <footer class="footer"></footer>
</div>
</body>
</html>













