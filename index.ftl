<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>首页</title>
    <#include 'src/head.ftl' >
    <link rel="preload stylesheet" as="style" href="${base_url}/source/css/min/index.min.css">

    <style>
        body {
            --main-max-width: ${settings.main_max_width};
        }

    </style>
</head>
<body>
<div id="Butterfly" class="index">
    <nav class="nav"></nav>

    <header class="header">
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













