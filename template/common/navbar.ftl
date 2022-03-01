<#--    头部-->
<header class="header">
    <@menuTag method="tree"><#assign menuList=menus></@menuTag>
    <div class="header__box">
        <a title="${blog_title!}" class="site_name" href="${blog_url!}">${blog_title!}</a>
        <nav class="header__nav">
            <@menuTag method="tree">
                <#list menuList?sort_by('priority') as menu>
                    <#if menu.children?? && menu.children?size gt 0>
                        <div class="dropdown ">
                            <a href="javascript:;" target="${menu.target!}" title="${menu.name}"
                               class="item ">
                                <#if  menu.icon?? && menu.icon!=''>
                                    <i class="${menu.icon}"></i>
                                </#if>
                                <span>${menu.name}</span>
                                <i class="by-font by_icon_arrow-down"></i>
                            </a>
                            <nav class="dropdown_menu">
                                <#list menu.children as child>
                                    <a href="${child.url}" target="${child.target!}" title="${child.name}"
                                       class="dropdown_menu_item">
                                        <#if  child.icon?? && child.icon!=''>
                                            <i class="${child.icon}"></i>
                                        </#if>
                                        <span>${child.name}</span>
                                    </a>
                                </#list>
                            </nav>
                        </div>
                    <#else>
                        <a href="${menu.url}" target="${menu.target!}" title="${menu.name}"
                           class="item ">
                            <#if  menu.icon?? && menu.icon!=''>
                                <i class="${menu.icon}"></i>
                            </#if>
                            <span>${menu.name}</span>
                        </a>
                    </#if>
                </#list>
            </@menuTag>
        </nav>
        <div class="header__action">
            <a href="javascript:;" class="search item"><i class="by-font by_icon_sousuo2"></i><span>搜索</span></a>
            <a href="javascript:;" class="toggle item"><i class="by-font by_icon_sangang"></i></a>
        </div>
    </div>

    <div class="header__sidebar">
        <img class="blog_avatar" src="${user.avatar!}" alt="${user.description!}">
        <div class="blog_data ">
            <@postTag method="count">
                <a class="data_item" title="文章" href="${archives_url!}">
                    <div class="headline">文章</div>
                    <div class="length-num nowrap">${count!0}</div>
                </a>
            </@postTag>
            <@tagTag method="count">
                <a href="${tags_url!}" title="标签" class="data_item">
                    <div class="headline">标签</div>
                    <div class="length-num nowrap">${count!0}</div>
                </a>
            </@tagTag>
            <@commentTag method="count">
                <a class="data_item" title="评论" href="javascript:;">
                    <div class="headline ">评论</div>
                    <div class="length-num nowrap">${count!0}</div>
                </a>
            </@commentTag>

        </div>
        <hr/>
        <nav class="blog_menu">
            <#list menuList?sort_by('priority') as menu>
                <#if menu.children?? && menu.children?size gt 0>
                    <div class="menu_item nowrap">
                        <a href="javascript:;">
                            <#if  menu.icon?? && menu.icon!=''><i class="${menu.icon}"></i></#if>
                            ${menu.name}
                            <i class="by-font by_icon_arrow-right"></i>
                        </a>

                        <div class="child flex">
                            <#list menu.children as child>
                                <a href="${child.url}" target="${child.target!}" title="${child.name}"
                                   class="child_item menu_item">
                                    <#if  child.icon?? && child.icon!=''>
                                        <i class="${child.icon}"></i>
                                    </#if>
                                    <span>${child.name}</span>
                                </a>
                            </#list>
                        </div>
                    </div>
                <#else>
                    <a href="${menu.url}" target="${menu.target!}" title="${menu.name}" class="menu_item nowrap">
                        <#if  menu.icon?? && menu.icon!=''><i class="${menu.icon}"></i></#if>
                        ${menu.name}
                    </a>
                </#if>
            </#list>
        </nav>
    </div>

    <div class="header__search">
        <nav class="search_nav">
            <span class="n_title">文章搜索</span>
            <button class="n_close">
                <i class="by-font by_icon_cuowu"></i>
            </button>
        </nav>
        <form class="search" method="get" action="${blog_url!}/search">
            <input maxlength="16" name="keyword" class="search_input" placeholder="请输入搜索关键字..." type="text"/>
        </form>
        <hr>
    </div>

    <div class="header__mask"></div>
</header>

