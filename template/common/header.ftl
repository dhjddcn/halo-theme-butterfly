<#-- type 类型 title 标题  top_background_img 顶部背景图  -->
<#macro header type  title top_background_img  >
    <header class="by_header"
            <#if type != 'post' >
                style="${(settings.enable_top_background_img && settings['enable_top_${type}_background_img'] )?then('background-image:url(${top_background_img!})','height:60px')}"
            <#else>
                style="background-image:url(${top_background_img!})"
            </#if>
    >
        <nav class="by_nav">
            <a class="by_blog_title" href=${blog_url!}>${blog_title!}</a>
            <div class="by_menu">
                <div class="by_search">
                    <a class="by_site">
                        <i class="by-font by_icon_search"></i>
                        <span>搜索</span>
                    </a>
                </div>
                <div class="by_toggle_menu">
                    <a class="by_site">
                        <i class="by-font by_icon_sangang"></i>
                    </a>
                </div>
                <ul class="by_menus">
                    <@menuTag method="tree">
                        <#list menus?sort_by('priority') as menu>
                            <li class="by_menu_item">
                                <a href="${menu.url}" target="${menu.target!}" title="${menu.name}" class="by_site">
                                    <#if  menu.icon?? && menu.icon!=''>
                                        <i class="${menu.icon} first"></i>
                                    </#if>
                                    <span>${menu.name}</span>
                                    <#if menu.children?? && menu.children?size gt 0>
                                        <i class="by-font by_icon_arrow-down last"></i>
                                    </#if>
                                </a>

                                <#if menu.children?? && menu.children?size gt 0>
                                    <ul class="by_menu_item_child">
                                        <#list menu.children as child>
                                            <li>
                                                <a href="${child.url!}" target="${child.target!}"
                                                   title="${child.name!}" class="by_site child">
                                                    <#if  child.icon?? && child.icon!=''>
                                                        <i class=" ${child.icon}"></i>
                                                    </#if>
                                                    <span>${child.name!}</span>
                                                </a>
                                            </li>
                                        </#list>
                                    </ul>
                                </#if>
                            </li>
                        </#list>
                    </@menuTag>
                </ul>
            </div>
        </nav>

        <#if (settings.enable_top_background_img && type == 'index')?then(settings['enable_top_${type}_background_img'],false)  >
            <div class="by_site_info">
                <h1 class="by_site_title center ">${title!}</h1>
                <div class="by_site_subtitle center">
                    <span class="subtitle"></span>
                </div>
                <div class="by_site_social_icons center">
                    <a href=""> <i class="by-font by_icon_xinhao"></i></a>
                    <a href=""> <i class="by-font by_icon_youjian1"></i></a>
                </div>
            </div>
        </#if>

        <#--移动端-->
        <div class="by_header_sidebar">
            <div class="by_header_sidebar_mask"></div>
            <div class="by_header_sidebar_menus">
                <div class="by_user_avatar">
                    <img class="lazyload" data-src="${user.avatar!}" src="${lazy_img}" onerror="this.src='${err_img}'"
                         alt="${user.nickname!}">
                </div>

                <div class="by_user_data center">
                    <@postTag method="count">
                        <a href="${archives_url!}" title="文章" class="by_user_data_item">
                            <div class="headline ellipsis">文章</div>
                            <div class="length_num ellipsis">${count!0}</div>
                        </a>
                    </@postTag>
                    <@tagTag method="count">
                        <a href="${tags_url!}" title="标签" class="by_user_data_item">
                            <div class="headline ellipsis">标签</div>
                            <div class="length_num ellipsis">${count!0}</div>
                        </a>
                    </@tagTag>
                    <@commentTag method="count">
                        <a title="评论" class="by_user_data_item">
                            <div class="headline ellipsis">评论</div>
                            <div class="length_num ellipsis">${count!0}</div>
                        </a>
                    </@commentTag>
                </div>
                <hr>
                <ul class="by_header_sidebar_menus_items">
                    <@menuTag method="tree">
                        <#list menus?sort_by('priority') as menu>
                            <li class="by_header_sidebar_menus_item ">
                                <#assign url = (menu.children?size gt 0)?then('javascript:void(0);','${menu.url}' )>

                                <a href="${url}" target="${menu.target!}" title="${menu.name}">
                                    <#if  menu.icon?? && menu.icon!=''>
                                        <i class="${menu.icon} first"></i>
                                    </#if>
                                    <span>${menu.name}</span>
                                    <#if menu.children?? && menu.children?size gt 0>
                                        <i class="by-font by_icon_zuo last"></i>
                                    </#if>
                                </a>
                                <#if menu.children?? && menu.children?size gt 0>
                                    <ul class="by_header_sidebar_menus_item_child">
                                        <#list menu.children as child>
                                            <li>
                                                <a href="${child.url!}" target="${child.target!}"
                                                   title="${child.name!}">
                                                    <#if  child.icon?? && child.icon!=''>
                                                        <i class="first ${child.icon}"></i>
                                                    </#if>
                                                    <span>${child.name!}</span>
                                                </a>
                                            </li>
                                        </#list>

                                    </ul>
                                </#if>
                            </li>
                        </#list>
                    </@menuTag>
                </ul>
            </div>
        </div>

    </header>
</#macro>
