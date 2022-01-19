<#import "../module/post_thumbnail.ftl" as tbn>

<#macro latest posts>
    <div class="by_latest by_card_widget">
        <div class="by_card_icon_title  ">
            <i class="by-font by_icon_shijian "></i>
            <span>最新文章</span>
        </div>
        <div class="by_latest_list">
            <#list posts?sort_by("editTime")?reverse as post>
                <@tbn.post_thumbnail post=post />
                <div class="by_latest_list_item">
                    <a class="thumbnail" href="${post.fullPath!}" title="${post.title!}">
                        <img class="lazyload"
                             data-src="${tbn.thumbnail}"
                             src="${lazy_img}" onerror="this.src='${err_img}'" alt="${post.title!}">
                    </a>
                    <div class="content">
                        <a class="content_title" href="${post.fullPath!}">${post.title!}</a>
                        <time>
                            ${post.createTime?string('yyyy-MM-dd')}
                        </time>
                    </div>
                </div>
            </#list>

        </div>
    </div>
</#macro>
