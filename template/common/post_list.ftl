<#import "../module/post_thumbnail.ftl" as tbn>
<#macro post_list list>
    <ul class="posts_box">
        <#list list as post>
            <li class="post_item animated wow" data-wow-delay="0.${post_index}s">
                <@tbn.post_thumbnail post=post />
                <a class="post_cover" href="${post.fullPath!}" title="${post.title!}">
                    <img class="cover_img"
                         src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                         data-lazy-src="${tbn.thumbnail}"
                         onerror="this.onerror=null,this.src='${err_img}'"
                         alt="${post.title!}">
                </a>
                <div class="post_info">
                    <a href="${post.fullPath!}" title="${post.title!}" class="info_title">${post.title!}</a>
                    <div class="info_meta">
                        <#if post.topped>
                            <span class="item">
                                <i class="by-color by-color_zhiding"></i>
                                <span class="sticky">置顶</span>
                                <span class="su">|</span>
                        </span>
                        </#if>
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
<#--                                <span class="su">|</span>-->
                        </span>
                    </div>
                    <div class="info_meta">
                        <span class="item commentCount">
                                <i class="by-color by-color_pinglun1"></i>
                                <span class="txt">${post.commentCount!0}条评论</span>
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
<#--                                <span class="su">|</span>-->
                        </span>
                        </#if>

                    </div>
                    <div class="info_content">${post.summary!}</div>
                </div>
            </li>
        </#list>
    </ul>
</#macro>
