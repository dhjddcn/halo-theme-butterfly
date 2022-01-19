<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<#include "template/module/post_thumbnail.ftl">
<#include "template/common/pagination.ftl">
<@layout title="文章归档" type="archives" top_background_img="${settings.top_archives_background_img!}" >
    <@postTag method="count">
        <#assign count = count>
    </@postTag>
    <#if count == 0>
        <@empty showBg=false />
    <#else>
        <div class="by_archives_sort_title">
            文章归档 - ${count!0}
        </div>
        <div class="by_archives_sort ">
            <#list archives as archive>
                <div class="by_archives_sort_item year">${archive.year?c}</div>
                <#list archive.posts as post>
                    <div class="by_archives_sort_item ">
                        <a href="${post.fullPath!}" title="${post.title!}" class="by_archives_sort_item_img">
                            <@post_thumbnail post=post />
                            <img class="lazyload" data-src="${thumbnail}" src="${lazy_img}"
                                 onerror="this.src='${err_img}'"
                                 alt="${post.title!}">
                        </a>
                        <div class="by_archives_sort_item_info">
                            <div class="by_archives_sort_item_info_item">
                                <i class="by-font by_icon_rili1"></i>
                                <time class="post-meta-date-created" datetime="${post.createTime?string('yyyy-MM-dd')}"
                                      title="发表于 ${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}
                                </time>
                            </div>
                            <a class="by_archives_sort_item_info_title" href="${post.fullPath!}" title="${post.title!}">
                                ${post.title!}
                            </a>
                        </div>
                    </div>
                </#list >
            </#list >
        </div>
    </#if>
    <@pagination method='archives' />
</@layout>
