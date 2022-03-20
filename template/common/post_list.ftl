<#import "../module/post_thumbnail.ftl" as tbn>
<#macro post_list  list method='index' slug="" keyword="" display = "3">
    <ul class="posts_box">
        <#list list as post>
            <li class="post_item widget animated wow" data-wow-delay="0.${post_index}s">
                <@tbn.post_thumbnail post=post />
                <a class="post_cover" href="${post.fullPath!}" title="${post.title!}">
                    <img class="cover_img"
                         src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                         data-lazy-src="${tbn.thumbnail}"
                         onerror="this.onerror=null,this.src='${err_img}'"
                         alt="${post.title!}">
                </a>
                <div class="post_info">
                    <a href="${post.fullPath!}" title="${post.title!}" class="info_title">
                        <#if post.topped><i class="by-color by-color_zhiding"></i></#if>
                        ${post.title!}</a>
                    <div class="info_meta">
                        <span class="item createTime">
                                <i class="by-color by-color_icon--date"></i>
                                <time datetime="${post.createTime?string('yyyy-MM-dd')}"
                                      class="txt">发表于<@global.timeline datetime=post.createTime /></time>
                                <span class="su">|</span>
                        </span>
                        <span class="item updateTime">
                                <i class="by-color by-color_shijian"></i>
                                <time datetime="${post.updateTime?string('yyyy-MM-dd')}"
                                      class="txt">更新于<@global.timeline datetime=post.updateTime /></time>
                                <span class="su">|</span>
                        </span>
                        <span class="item visits">
                                <i class="by-color by-color_yanjing-"></i>
                                <span class="txt">预览 ${post.visits!0}</span>
                        </span>
                    </div>
                    <div class="info_meta">
                            <span class="item commentCount">
                                <i class="by-color by-color_pinglun1"></i>
                                <span class="txt">${post.commentCount}条评论</span>
                                <span class="su">|</span>
                        </span>
                        <#if (post.categories)?? && post.categories?size gt 0>
                            <span class="item categories">
                                    <i class="by-color by-color_fenlei"></i>
                                    <span class="txt">
                                        <#list post.categories as category>
                                            <a class="link" href="${category.fullPath!}"
                                               title="${category.name!}">${category.name!}</a><span
                                                class="point">•</span>
                                        </#list>
                                    </span>
                                    <span class="su">|</span>
                                </span>
                        </#if>
                        <#if (post.tags)?? && post.tags?size gt 0>
                            <span class="item tags">
                                <i class="by-color by-color_biaoqian"></i>
                                <span class="txt">
                                        <#list post.tags as tag>
                                            <a class="link" href="${tag.fullPath!}"
                                               title="${tag.name!}">${tag.name!}</a><span class="point">•</span>
                                        </#list>
                                </span>
                        </span>
                        </#if>

                    </div>
                    <div class="info_content">${post.summary!}</div>
                </div>
            </li>
        </#list>
    </ul>

    <@paginationTag method="${method!}"  keyword="${keyword!}" slug="${slug!}" page="${posts.number}" total="${posts.totalPages}" display="${display}">
        <div class="pagination">
            <#if pagination.hasPrev><a href="${pagination.prevPageFullPath!}" title="上一页" class="prev"><i
                        class="by-font by_icon_zuo"></i></a></#if>

            <#list pagination.rainbowPages as number>
                <#if number.isCurrent>
                    <a class="page current" href="${number.fullPath!}">${number.page!}</a>
                <#else>
                    <a class="page" href="${number.fullPath!}">${number.page!}</a>
                </#if>
            </#list>
            <#if pagination.hasNext><a href="${pagination.nextPageFullPath!}" title="下一页" class="next"><i
                        class="by-font by_icon_you"></i></a> </#if>
        </div>
    </@paginationTag>
</#macro>
