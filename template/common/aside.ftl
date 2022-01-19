<#--侧边栏-->
<#macro aside>
    <aside class="by_aside">
        <#--用戶信息-->
        <div class="by_user_info by_card_widget">
            <div class="center">
                <div class="by_user_avatar">
                    <img class="lazyload" data-src="${user.avatar!}" src="${lazy_img}" onerror="this.src='${err_img}'"
                         alt="${user.nickname!}">
                </div>

                <div class="by_user_name">${user.nickname!}</div>
                <div class="by_user_desc">${user.description!}</div>
            </div>

            <div class="by_user_data center">
                <@postTag method="count">
                    <a href="${archives_url!}" title="文章" class="by_user_data_item">
                        <div class="headline">文章</div>
                        <div class="length-num">${count!0}</div>
                    </a>
                </@postTag>
                <@tagTag method="count">
                    <a href="${tags_url!}" title="标签" class="by_user_data_item">
                        <div class="headline">标签</div>
                        <div class="length-num">${count!0}</div>
                    </a>
                </@tagTag>
                <@commentTag method="count">
                    <a title="评论" class="by_user_data_item">
                        <div class="headline">评论</div>
                        <div class="length-num">${count!0}</div>
                    </a>
                </@commentTag>
            </div>

            <a class="by_btn" href="/">
                <i class="by-font by_icon_github"> </i>主题 GitHub
            </a>
        </div>

        <#--通知-->
        <#if settings.site_notice?? && settings.enable_notice>
            <#include "../aside/notice.ftl"/>
        </#if>

        <#--最新文章-->
        <@postTag method="latest" top="${settings.newest_page_size!5}">
            <#if posts?size gt 0 && settings.enable_newest_post>
                <#include "../aside/latest.ftl"/>
                <@latest posts=posts />
            </#if>
        </@postTag>


        <#--分类-->
        <@categoryTag method="list">
            <#if categories?size gt 0 && settings.enable_categories>
                <#include "../aside/categorie.ftl"/>
                <@categorie list=categories />
            </#if>
        </@categoryTag>


        <#--标签-->
        <@tagTag method="list">
            <#if tags?size gt 0 && settings.enable_tags>
                <#include "../aside/tag.ftl"/>
                <@tag list=tags />
            </#if>
        </@tagTag>
    </aside>
</#macro>
