<#macro header title  background_img >
    <#assign bg = (background_img == '')?then('', 'background-image: url(${background_img!});')>
    <header class="by_header ${settings.enable_top_background_img?then('','by_enable_top_background_img')} ${(is_post??)?then("by_header_post", "")}"
            style="${bg!}">
        <nav class="by_nav ">
            <a class="by_site_title" href=${blog_url!}>${blog_title!}</a>
            <ul class="by_menus">
<#--                <div class="by_menu_item pointer by_search">-->
<#--                    <a>-->
<#--                        <i class="by-font by_icon_sousuo"></i>-->
<#--                        <span>搜索</span>-->
<#--                    </a>-->
<#--                </div>-->

                <div class="by_menu_item pointer by_toggle_menu">
                    <a>
                        <i class="by-font by_icon_sangang"></i>
                    </a>
                </div>

                <@menuTag method="tree">
                    <#list menus?sort_by('priority') as menu>
                        <li class="by_menu_item">
                            <a href="${menu.url}" target="${menu.target!}" title="${menu.name}">
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
                                            <a href="${child.url!}" target="${child.target!}" title="${child.name!}">
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
        </nav>

        <#if settings.enable_top_background_img>
            <div class="by_site_info center ">
                <h1 class="by_site_title ">${title!}</h1>
                <#-- 文章页面需要-->
                <#if  is_post??>
                    <div class="by_post_meta ">
                        <div class="by_meta_firstline">
                        <span>
                            <i class="by-font by_icon_rili1"></i>
                            <span class="label">发表于</span>
                            <time datetime="${post.createTime?string('yyyy-MM-dd')}"
                                  title="发表于 ${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}</time>
                        </span>
                            <span>
                            <span class="by_separator">|</span>
                            <i class="by-font by_icon_fenlei"></i>
                              <#if post.categories?size gt 0>
                                  <a href="${categories_url!}/${post.categories[0].name!}"
                                     title="${post.categories[0].name!}">${post.categories[0].name!}</a>
                              </#if>
                        </span>
                        </div>
                        <div class="by_meta_secondline">
                        <span>
                            <i class="by-font by_icon_wenjian"></i>
                            <span class="label">字数总计:</span>
                            <span>${post.wordCount!}</span>
                        </span>
                            <span>
                            <span class="by_separator">|</span>
                            <i class="by-font by_icon_shijian"></i>
                            <span class="label">阅读时间:</span>
                            <span>${(post.wordCount?int / 400)?int }分钟</span>
                        </span>
                            <span>
                            <span class="by_separator">|</span>
                            <i class="by-font by_icon_yanjing"></i>
                            <span class="label">访问量:</span>
                            <span>${post.visits!}</span>
                        </span>
                        </div>

                    </div>
                </#if>

                <div class="by_site_subtitle ">
                    <span class="subtitle"></span>
                </div>
                <div class="by_site_social_icons">
                    <a href=""><i class="by-font by_icon_youjian1"></i></a>
                    <a href=""><i class="by-font by_icon_xinhao"></i></a>
                </div>
            </div>

            <div class="by_scroll_down pointer center">
                <i class="by-font by_icon_arrow-down by_scroll_down_effects "></i>
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
