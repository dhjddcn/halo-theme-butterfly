<aside class="aside animated wow" data-wow-delay="0.2s">
    <div class="user ">
        <div class="user_info">
            <img class="user_avatar"
                 src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                 data-lazy-src="${user.avatar!}"
                 onerror="this.onerror=null,this.src='${err_img}'"
                 alt="${user.nickname!}">

            <div class="user_name">${user.nickname!}</div>
            <div class="user_desc">${user.description!}</div>
            <div class="user_data">
                <a class="item" title="文章" href="${archives_url!}">
                    <div class="headline">文章</div>
                    <div class="num">${postCount!}</div>
                </a>
                <a class="item" href="${tags_url!}" title="标签">
                    <div class="headline">文章</div>
                    <div class="num">${tagCount!}</div>
                </a>
                <a class="item" title="评论" href="javascript:">
                    <div class="headline">文章</div>
                    <div class="num">${commentCount!}</div>
                </a>
            </div>

            <a class="user_link" href="">
                <i class="by-font by_icon_github"></i> <span class="t">主题地址</span>
            </a>
        </div>
    </div>
</aside>
