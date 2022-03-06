<#import "../module/post_thumbnail.ftl" as tbn>
<#macro post_list list>
    <div class="posts_box">
        <#list list as post>
            <div class="post_item">
                <@tbn.post_thumbnail post=post />
                <a class="post_cover" href="${post.fullPath!}" title="${post.title!}">
                    <img class="_img"
                         src="${lazy_img}"
                         data-lazy-src="${tbn.thumbnail}"
                         onerror="this.onerror=null,this.src='${err_img}'"
                         alt="${post.title!}">
                </a>
                <div class="post_info"></div>
            </div>
        </#list>
    </div>
</#macro>
