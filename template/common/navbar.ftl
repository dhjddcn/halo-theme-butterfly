<#--    头部-->
<header class="by_header">
    <div class="by_header_container">
        <a title="${blog_title  !}" class="by_header__blog-name" href="${blog_url!}">
            ${blog_title!}
        </a>
        <nav class="by_header_nav">
            <@menuTag method="list">
                <#list menus as menu>
                    <a class="item" href="${menu.url!}" target="${menu.target!}">
                        <#if  menu.icon?? && menu.icon!=''>
                            <i class="${menu.icon} first"></i>
                        </#if>
                        <span>${menu.name!}</span>
                    </a>
                </#list>
            </@menuTag>
        </nav>
        <div class="by_header__Fn">
            <div class="by_header_search">
                <i class="by-font by_icon_search"></i>
                <span>搜索</span>
            </div>
        </div>
    </div>
</header>

