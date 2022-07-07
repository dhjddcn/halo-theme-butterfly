<#macro Posts  display method=""  slug="" keyword="" >
    <ul class="post_list-content">
        <#list posts.content as post>
            <li class="post_list-item widget">
                <a class="cover" href="${post.fullPath!}" title="${post.title!}">
                    <img
                            src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                            data-lazy-src="${post.thumbnail!}"
                            onerror="this.onerror=null,this.src='${err_img}'"
                            alt="${post.title!}"
                    >
                </a>
                <div class="info">
                    <a class="info_title" href="${post.fullPath!}" title="${post.title!}"><h2>${post.title!}</h2></a>

                    <div class="info_meta">
                        ${base_url + "/source/svg/calendar.svg" }

                    </div>


                </div>
            </li>
        </#list>
    </ul>
</#macro>


