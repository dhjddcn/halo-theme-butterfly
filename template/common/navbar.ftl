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


    <div class="header__site">
        <h1 class="site_title">${blog_title!}</h1>
        <div class="site_subtitle">
            <span class="subtitle"></span>
        </div>
        <div class="site_icons">
            <a href="" class="ic_link">
                <svg t="1646319571226" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="11339" width="200" height="200">
                    <path d="M54.857143 512c0 201.984 130.980571 373.321143 312.630857 433.773714 22.857143 4.205714 31.213714-9.910857 31.213714-22.034285 0-10.843429-0.402286-39.606857-0.621714-77.732572-127.158857 27.611429-153.984-61.293714-153.984-61.293714-20.809143-52.827429-50.779429-66.889143-50.779429-66.889143-41.508571-28.342857 3.145143-27.776 3.145143-27.776 45.897143 3.236571 70.034286 47.122286 70.034286 47.122286 40.777143 69.851429 106.989714 49.664 133.046857 37.961143 4.150857-29.513143 15.963429-49.664 29.001143-61.074286-101.485714-11.538286-208.219429-50.779429-208.219429-225.956572 0-49.901714 17.810286-90.733714 47.067429-122.660571-4.717714-11.556571-20.406857-58.057143 4.48-120.978286 0 0 38.363429-12.306286 125.696 46.866286 36.461714-10.166857 75.574857-15.213714 114.450286-15.414857 38.838857 0.182857 77.933714 5.248 114.432 15.414857 87.277714-59.172571 125.586286-46.866286 125.586285-46.866286 24.96 62.902857 9.270857 109.421714 4.571429 120.978286 29.312 31.926857 46.994286 72.777143 46.994286 122.660571 0 175.634286-106.898286 214.272-208.713143 225.572572 16.384 14.116571 31.012571 42.020571 31.012571 84.662857 0 61.110857-0.566857 110.409143-0.566857 125.403429 0 12.233143 8.246857 26.459429 31.433143 21.997714C838.290286 885.156571 969.142857 713.929143 969.142857 512 969.142857 259.547429 764.452571 54.857143 511.963429 54.857143 259.547429 54.857143 54.857143 259.529143 54.857143 512z"
                          fill="#EEEEEE" p-id="11340"></path>
                </svg>
            </a>
            <a href="" class="ic_link">
                <svg t="1646319815296" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="12242" width="200" height="200">
                    <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                          p-id="12243" fill="#EEEEEE"></path>
                </svg>
            </a>
            <a href="" class="ic_link">
                <svg t="1646319889132" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="12604" width="200" height="200">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-90.7 477.8l-0.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1 71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-0.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c0.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-0.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7H421.3z m346.5 167h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-0.1 0 0z m216 94.3l56.8-38.1h45.6-0.1V364.7H596.7v302.5h14.1z"
                          p-id="12605" fill="#EEEEEE"></path>
                </svg>
            </a>
            <a href="" class="ic_link">
                <svg t="1646319922974" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="13585" width="200" height="200">
                    <path d="M149.6 171.8h691.9c47.2 0 85.9 37.7 86.5 83.9L495.7 493 63.5 256c0.4-46.4 38.8-84.2 86.1-84.2z m-86.1 175l-0.4 419.6c0 46.7 38.9 84.9 86.5 84.9h691.9c47.6 0 86.5-38.2 86.5-84.9V346.6L505.9 572.8c-6.5 3.5-14.3 3.5-20.7 0l-421.7-226z"
                          p-id="13586" fill="#EEEEEE"></path>
                </svg>
            </a>
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

