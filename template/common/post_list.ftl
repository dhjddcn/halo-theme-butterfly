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
                                        <span class="meta_sticky">
                                        <svg t="1646558618322" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="17714" width="200" height="200"><path
                                                    d="M512 68.266667c245.060267 0 443.733333 198.673067 443.733333 443.733333S757.060267 955.733333 512 955.733333 68.266667 757.060267 68.266667 512 266.939733 68.266667 512 68.266667"
                                                    fill="#ff7242" p-id="17715" data-spm-anchor-id="a313x.7781069.0.i20"
                                                    class="selected"></path><path
                                                    d="M665.6 520.430933c-7.645867 0-15.291733-2.901333-21.111467-8.7552L512 379.221333l-132.488533 132.471467a29.832533 29.832533 0 0 1-42.222934 0 29.832533 29.832533 0 0 1 0-42.222933l153.6-153.6a29.832533 29.832533 0 0 1 42.222934 0l153.6 153.6A29.832533 29.832533 0 0 1 665.6 520.430933"
                                                    fill="#FFFFFF" p-id="17716"></path><path
                                                    d="M512 717.4656a29.866667 29.866667 0 0 1-29.866667-29.866667V354.030933a29.866667 29.866667 0 0 1 59.733334 0v333.568a29.866667 29.866667 0 0 1-29.866667 29.866667"
                                                    fill="#FFFFFF" p-id="17717"></path></svg>
                                            <span class="sticky">置顶</span>
                                            <span class="separator">|</span>
                                        </span>
                    </div>
                </div>
            </li>
        </#list>
    </ul>
    <ul class="posts_box__loading"></ul>
</#macro>
