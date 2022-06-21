<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>${blog_title!}</title>
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
    <#--头部-->
    <header class="by_header">
        <section class="by_header__navbar">

            <a href="${blog_url!}" class="by_header__title" title="${blog_title!}">
                ${blog_title!}
            </a>

            <nav class="by_header__nav">
                <#list menuList?sort_by('priority') as menu>
                    <#if menu.children?? && menu.children?size gt 0>
                        <div class="by_dropdown" trigger="hover" placement="60px">
                            <a class="item" href="javascript:" target="${menu.target!}">
                                <i class="${menu.icon}"></i>
                                <span>${menu.name}</span>
                                <i class="by-font by-icon-downArrow"></i>
                            </a>

                            <nav class="by_dropdown__menu">
                                <#list menu.children as child>
                                    <a href="${child.url}" target="${child.target!}"
                                       class="item ">
                                        <#if  child.icon?? && child.icon!=''>
                                            <i class="${child.icon}"></i>
                                        </#if>
                                        <span>${child.name}</span>
                                    </a>
                                </#list>
                            </nav>
                        </div>
                    <#else>

                        <a class="item" href="${menu.url}" target="${menu.target!}">
                            <#if  menu.icon?? && menu.icon!=''>
                                <i class="${menu.icon}"></i>
                            </#if>
                            <span>${menu.name}</span>
                        </a>

                    </#if>
                </#list>

            </nav>

            <div class="by_header__action">
                <i class="by-font by-icon-search"></i>
                <i class="by-font by-icon-toggle"></i>
            </div>

        </section>

        <section class="by_header__slideOut">
        </section>

        <section class="by_header__search">
            <div class="title-action">
                <span class="title">文章搜索</span>
                <img class="action" src="${base_url!}/source/svg/close.svg" alt="">
            </div>

            <form class="form" method="get" action="${blog_url!}/search">
                <label>
                    <input maxlength="16" autocomplete="off" name="keyword" class="form_input" placeholder="请输入搜索关键字..."
                           type="text">
                </label>
            </form>
            <hr>

            <div> 回车搜索哟~</div>
        </section>

        <section class="by_header__site">
            <h1 class="title">${blog_title!}</h1>
            <div class="subtitle">
                <span class="sub-text"></span>
            </div>
            <div class="icons">
                <a href="index.ftl">
                    <img src="${base_url!}/source/svg/github.svg" alt="">
                </a>
                <a href="index.ftl">
                    <img src="${base_url!}/source/svg/qq.svg" alt="">
                </a>
                <a href="index.ftl">
                    <img src="${base_url!}/source/svg/zhihu.svg" alt="">
                </a>
                <a href="index.ftl">
                    <img src="${base_url!}/source/svg/email.svg" alt="">
                </a>
            </div>
        </section>

        <div class="by_header__down">
            <img src="${base_url!}/source/svg/down.svg" alt="">
        </div>

        <div class="by_header__mask"></div>
    </header>
    <#--主内容-->
    <main class="by_main">
        <section class="by_main__content">
        </section>
        <aside class="by_main__aside">
121
        </aside>

    </main>
    <#--操作-->
    <div class="by_action">
        <button class="by_action__model" title="浅色和深色模式转换">

        </button>
        <button class="by_action__msg" title="在线留言">

        </button>
        <button class="by_action__topUp" title="回到顶部">

        </button>
    </div>
    <#--页脚-->
    <footer class="by_footer"></footer>
</div>

<script type="text/javascript" src="${base_url!}/source/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/wow/wow.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/lib/typed/typed.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/utils.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/main.min.js"></script>
<script type="text/javascript" src="${base_url!}/source/js/min/index.min.js"></script>
</body>
</html>













