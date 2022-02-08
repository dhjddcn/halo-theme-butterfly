<#-- type 类型 title 标题  top_background_img 顶部背景图  -->
<#macro header type  title top_background_img  >
    <header
    class="by_header ${settings.nav_font_color!}"
<#--    style="${()?then('','')}"-->
    >
        <nav class="by_nav">
            <a class="by_blog_title" href=${blog_url!}>${blog_title!}</a>
            <div class="by_menu">
<#--                <div class="by_search">-->
<#--                    <a class="by_site">-->
<#--                        <i class="by-font by_icon_search"></i>-->
<#--                        <span>搜索</span>-->
<#--                    </a>-->
<#--                </div>-->
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

        <#if settings.enable_top_background_img  && settings['enable_top_${type}_background_img'] >
            <div class="by_site_info">
                <h1 class="by_site_title center ">${title!}</h1>
                <#if type == 'index'   >
                    <div class="by_site_subtitle center">
                        <span class="subtitle"></span>
                    </div>
                    <div class="by_site_social_icons center">
                        <#if settings.github != '' >
                            <a href="${settings.github!}" target="_blank" title="github"> <i
                                        class="by-font by_icon_xinhao"></i></a>
                        </#if>
                        <#if settings.email != '' >
                            <a href="${settings.email!}" target="_blank" title="邮箱"> <i
                                        class="by-font by_icon_youjian1"></i></a>
                        </#if>
                    </div>
                </#if>
                <#if type == 'post'>
                    <div class="by_post_meta center">
                        <div class="by_post_wrap">
                            <div>
                                <svg t="1642927072061" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="5358" width="200" height="200">
                                    <path d="M863.75416667 953.64444445H183.12916667C149.37916667 953.64444445 121.25416667 925.51944445 121.25416667 891.76944445V211.14444445c0-33.75 28.125-61.875 61.875-61.875h61.875v33.75c0 50.625 39.375 95.625 95.625 95.625 50.625 0 95.625-39.375 95.625-95.625v-33.75h185.625v33.75c0 50.625 39.375 95.625 95.625 95.625s95.625-39.375 95.625-95.625v-33.75h61.875c33.75 0 61.875 28.125 61.875 61.875v680.625c-11.25 33.75-33.75 61.875-73.125 61.875z m0-590.625H183.12916667v528.75h680.625V363.01944445zM340.62916667 520.51944445H245.00416667V424.89444445h95.625v95.625z m0 151.875H245.00416667V582.39444445h95.625V672.39444445z m0 157.5H245.00416667v-95.625h95.625v95.625z m151.875-309.375H402.50416667V424.89444445h95.625v95.625z m0 151.875H402.50416667V582.39444445h95.625V672.39444445z m0 157.5H402.50416667v-95.625h95.625v95.625z m157.5-309.375H554.37916667V424.89444445h95.625v95.625z m0 151.875H554.37916667V582.39444445h95.625V672.39444445z m0 157.5H554.37916667v-95.625h95.625v95.625z m151.875-309.375h-95.625V424.89444445h95.625v95.625z m0 151.875h-95.625V582.39444445h95.625V672.39444445z m0 157.5h-95.625v-95.625h95.625v95.625zM711.87916667 239.26944445c-33.75 0-61.875-28.125-61.875-61.875V115.51944445c0-33.75 28.125-61.875 61.875-61.875 33.75 0 61.875 28.125 61.875 61.875v61.875c0 33.75-28.125 61.875-61.875 61.875z m-376.875 0c-33.75 0-61.875-28.125-61.875-61.875V115.51944445C278.75416667 81.76944445 301.25416667 53.64444445 335.00416667 53.64444445c33.75 0 61.875 28.125 61.875 61.875v61.875c0 33.75-28.125 61.875-61.875 61.875z m0 0"
                                          fill="#ffffff" p-id="5359"></path>
                                </svg>
                                <time datetime="${post.createTime?string('yyyy-MM-dd')}"
                                      title="${post.createTime?string('yyyy-MM-dd')}">
                                    发布于 ${post.createTime?string('yyyy-MM-dd')}
                                </time>
                                <span class="separator"> |</span>
                            </div>
                            <div>
                                <svg t="1642927036992" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="4986" width="200" height="200">
                                    <path d="M481.28 801.792h61.44v77.824h-61.44zM798.72 481.28h77.824v61.44H798.72zM136.192 481.28h77.824v61.44h-77.824z"
                                          fill="#ffffff" p-id="4987"></path>
                                    <path d="M512 955.392C267.264 955.392 68.608 756.736 68.608 512c0-125.952 54.272-246.784 147.456-330.752l54.272 61.44C193.536 311.296 150.528 409.6 150.528 512c0 199.68 162.816 361.472 361.472 361.472S873.472 711.68 873.472 512C873.472 274.432 675.84 150.528 481.28 150.528v-81.92c235.52 0 474.112 152.576 474.112 443.392 0 244.736-198.656 443.392-443.392 443.392z"
                                          fill="#ffffff" p-id="4988"></path>
                                    <path d="M481.28 75.776h81.92v443.392h-81.92z" fill="#ffffff" p-id="4989"></path>
                                    <path d="M499.67104 468.7872l63.6928 51.52768-108.83072 134.5536-63.6928-51.52768z"
                                          fill="#ffffff" p-id="4990"></path>
                                </svg>
                                <time>更新于 ${post.updateTime?string('yyyy-MM-dd')}
                                </time>
                                <span class="separator"> |</span>
                            </div>

                            <div class="ato">
                                <svg t="1642927001676" class="icon" viewBox="0 0 1039 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="7723" width="200" height="200">
                                    <path d="M327.834275 482.109228h-115.706215c-84.851224 0-154.274953-69.423729-154.274953-154.274953v-115.706215c0-84.851224 69.423729-154.274953 154.274953-154.274953h115.706215c84.851224 0 154.274953 69.423729 154.274953 154.274953v115.706215c0 84.851224-69.423729 154.274953-154.274953 154.274953z m-115.706215-347.118644c-42.425612 0-77.137476 34.711864-77.137476 77.137476v115.706215c0 42.425612 34.711864 77.137476 77.137476 77.137476h115.706215c42.425612 0 77.137476-34.711864 77.137476-77.137476v-115.706215c0-42.425612-34.711864-77.137476-77.137476-77.137476h-115.706215zM327.834275 983.502825h-115.706215c-84.851224 0-154.274953-69.423729-154.274953-154.274953v-115.706215c0-84.851224 69.423729-154.274953 154.274953-154.274953h115.706215c84.851224 0 154.274953 69.423729 154.274953 154.274953v115.706215c0 84.851224-69.423729 154.274953-154.274953 154.274953z m-115.706215-347.118644c-42.425612 0-77.137476 34.711864-77.137476 77.137476v115.706215c0 42.425612 34.711864 77.137476 77.137476 77.137476h115.706215c42.425612 0 77.137476-34.711864 77.137476-77.137476v-115.706215c0-42.425612-34.711864-77.137476-77.137476-77.137476h-115.706215zM829.227872 983.502825h-115.706215c-84.851224 0-154.274953-69.423729-154.274953-154.274953v-115.706215c0-84.851224 69.423729-154.274953 154.274953-154.274953h115.706215c84.851224 0 154.274953 69.423729 154.274953 154.274953v115.706215c0 84.851224-69.423729 154.274953-154.274953 154.274953z m-115.706215-347.118644c-42.425612 0-77.137476 34.711864-77.137476 77.137476v115.706215c0 42.425612 34.711864 77.137476 77.137476 77.137476h115.706215c42.425612 0 77.137476-34.711864 77.137476-77.137476v-115.706215c0-42.425612-34.711864-77.137476-77.137476-77.137476h-115.706215z"
                                          fill="#ffffff" p-id="7724"></path>
                                    <path d="M761.73258 482.109228c-36.640301 0-75.20904-13.499058-104.135593-42.425612l-75.20904-75.20904c-55.92467-55.92467-57.853107-148.489642 0-206.342749l77.137477-75.20904c57.853107-55.92467 150.418079-55.92467 206.342749 0l75.20904 75.20904c55.92467 55.92467 57.853107 148.489642 1.928437 204.414312l-1.928437 1.928437-75.20904 75.20904c-28.926554 28.926554-67.495292 42.425612-104.135593 42.425612z m-125.348399-268.052731c-25.06968 25.06968-25.06968 69.423729 1.928437 96.421846l75.209039 75.209039c26.998117 26.998117 71.352166 26.998117 98.350283 0l77.137476-77.137476c25.06968-26.998117 25.06968-69.423729 0-96.421846l-75.209039-75.209039c-26.998117-26.998117-71.352166-26.998117-98.350283 0l-79.065913 77.137476z"
                                          fill="#ffffff" p-id="7725"></path>
                                </svg>
                                <#list post.categories as category>
                                    <a href="${category.fullPath!}" title="${category.name!}">${category.name!}</a>
                                </#list>
                            </div>
                        </div>
                        <div class="by_post_wrap">
                            <div>
                                <svg t="1642926930137" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="6088" width="200" height="200">
                                    <path d="M418 206.99V502c0 57.35 46.65 104 104 104h295.01C803.22 678.61 766 745 710.47 795.15c-30.69 27.72-65.67 49.4-103.95 64.42C566.91 875.12 525.01 883 482 883c-46.06 0-90.7-9.01-132.7-26.77-40.6-17.17-77.07-41.77-108.41-73.11-31.34-31.34-55.94-67.82-73.11-108.41C150.01 632.7 141 588.06 141 542c0-43.01 7.88-84.9 23.43-124.52 15.03-38.29 36.7-73.26 64.42-103.95C279 258 345.39 220.78 418 206.99m24.24-67.85c-1.43 0-2.86 0.08-4.32 0.23C234.98 161.33 77 333.22 77 542c0 223.66 181.35 405 405 405 0.01 0-0.01 0 0 0 208.78 0 380.66-157.98 402.63-360.92 2.55-23.57-16.09-44.08-39.79-44.08H522c-22.09 0-40-17.91-40-40V179.16c0-22.24-18.06-40.02-39.76-40.02z"
                                          p-id="6089" fill="#ffffff"></path>
                                    <path d="M606 146.98c29.4 5.57 57.84 14.99 84.86 28.12 34.21 16.63 65.25 38.76 92.27 65.77 27.02 27.01 49.14 58.06 65.77 92.27A337.507 337.507 0 0 1 877.02 418H606V146.98m-24.09-67.82c-21.76 0-39.91 17.71-39.91 40.02V442c0 22.09 17.91 40 40 40h322.83c23.79 0 42.35-20.64 39.78-44.29C924.12 249.42 774.58 99.88 586.29 79.39c-1.47-0.16-2.93-0.23-4.38-0.23z"
                                          p-id="6090" fill="#ffffff"></path>
                                </svg>
                                <span>字数统计：${post.wordCount!0}</span>
                                <span class="separator"> |</span>
                            </div>
                            <div>
                                <svg t="1642926729862" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="2181" width="200" height="200">
                                    <path d="M854.72 138.666667v64h-106.581333v189.184l-179.264 118.464 179.264 118.464v207.146666h106.581333v64h-682.666667v-64h106.56v-207.146666l179.285334-118.464-179.285334-118.464V202.666667H172.053333v-64h682.666667zM513.365333 550.357333l-170.752 112.832v172.736h341.525334l-0.021334-172.736-170.752-112.832zM620.245333 704l0.170667 64-213.866667 0.533333-0.170666-64L620.245333 704zM684.16 202.666667h-341.546667l0.021334 154.773333 170.752 112.832 170.752-112.832V202.666667z"
                                          fill="#ffffff" p-id="2182"></path>
                                </svg>
                                <span>阅读时长：${(post.wordCount?int/400)?int}分</span>
                            </div>

                        </div>
                    </div>
                </#if >
            </div>
        </#if >




        <#--移动端-->
        <div class="by_header_sidebar">
            <div class="by_header_sidebar_mask"></div>
            <div class="by_header_sidebar_menus">
                <div class="by_user_avatar">
                    <img class="lazyload" data-src="${user.avatar!}" src="${lazy_img}"
                         onerror="this.src='${err_img}'"
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
