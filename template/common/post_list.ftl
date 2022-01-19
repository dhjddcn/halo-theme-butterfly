<#import "../module/post_thumbnail.ftl" as tbn>
<#macro post_list post>
    <div class="by_post_item by_card_widget">
        <a class="by_post_cover" href="${post.fullPath!}" title="${post.title!}">
            <@tbn.post_thumbnail post=post />
            <img class="lazyload" data-src="${tbn.thumbnail}" src="${lazy_img}" onerror="this.src='${err_img}'"
                 alt="${post.title!}">
        </a>

        <div class="by_post_info">
            <a href="${post.fullPath!}" title="${post.title!}" class="by_post_title">${post.title!}</a>
            <div class="by_post_meta_wrap">
                <#if post.topped>
                    <span class="by_post_meta sticky">
                    <i class="by-font by_icon_zhiding sticky"></i>
                    <span class="sticky">置顶</span>
                    <span class="separator">|</span>
                </span>
                </#if>
                <span class="by_post_meta">
                    <i class="by-font by_icon_rili1"></i>
                    <span>发表于</span>
                    <time datetime="${post.createTime?string('yyyy-MM-dd')}"
                          title="发表于 ${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}</time>
                    <span class="separator">|</span>
                </span>
                <span class="by_post_meta">

                    <i class="by-font by_icon_fenlei"></i>

                    <#if post.categories?size gt 0>
                        <a href="${categories_url!}/${post.categories[0].name!}"
                           title="${post.categories[0].name!}">${post.categories[0].name!}</a>
                    </#if>

                </span>
                <span class="by_post_meta">
                    <span class="separator">|</span>
                    <i class="by-font by_icon_b"></i>
                    <a href="${post.fullPath!}" title="${post.title!}">${post.commentCount!0}</a>
                    <span>评论</span>
                </span>
            </div>

            <div class="by_post_content">
                ${post.summary!}
            </div>
        </div>
    </div>

</#macro>
