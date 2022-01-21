<#--侧边栏-->
<#import "../module/post_thumbnail.ftl" as tbn>
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
                    <#assign posNum=count>
                    <a href="${archives_url!}" title="文章" class="by_user_data_item">
                        <div class="headline">文章</div>
                        <div class="length-num">${count!0}</div>
                    </a>
                </@postTag>
                <@tagTag method="count">
                    <#assign tagNum=count>
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
                <i class="by-font by_icon_github"> </i> 主题 GitHub
            </a>

            <div class="by_user_social_icons center">
                <a href="">
                    <svg t="1642767278920" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="9064" width="200" height="200">
                        <path d="M533.33333333 106.66666699A464.64 464.64 0 0 0 64.00000033 566.18666699 460.373333 460.373333 0 0 0 384.85333333 1002.66666699c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 832.00000033 541.86666699c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 1002.66666633 566.18666699 464.64 464.64 0 0 0 533.33333333 106.66666699"
                              p-id="9065"></path>
                    </svg>
                </a>
                <a href="">
                    <svg t="1642767523364" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="9338" width="200" height="200">
                        <path d="M80.896 290.816q-11.264-8.192-13.824-12.8t-2.56-13.824l0-18.432q0-23.552 12.8-38.4t42.496-14.848l785.408 1.024q31.744 0 44.032 13.312t12.288 36.864l0 20.48q0 9.216-2.048 12.288t-14.336 14.336l-389.12 224.256q-9.216 5.12-23.552 11.776t-19.456 6.656q-11.264 0-41.984-19.456l-16.384-10.24q-17.408-9.216-45.056-24.576t-62.464-35.328-71.68-41.472q-86.016-49.152-194.56-111.616zM923.648 368.64q17.408-11.264 27.648-9.216t10.24 16.384l0 357.376q0 34.816-7.68 54.784t-21.504 30.208-32.256 12.8-39.936 2.56l-684.032 0q-34.816 0-56.32-9.216t-33.792-23.552-17.408-33.28-5.12-38.4l0-344.064q0-19.456 9.728-24.576t24.064 5.12q6.144 4.096 31.232 19.968t54.272 33.792 53.76 33.28 29.696 18.432q12.288 8.192 11.776 16.896t-5.632 17.92q-4.096 7.168-11.776 23.552t-16.384 33.792-16.384 33.28-11.776 23.04-2.56 12.288 5.12 7.68 9.216 1.536 10.752-7.168q3.072-3.072 14.848-16.896t26.112-29.696 27.136-30.208 16.896-18.432q5.12-5.12 15.36-11.264t19.456 0q6.144 3.072 20.48 12.288t30.72 19.456l32.768 22.528q16.384 10.24 28.672 17.408 12.288 8.192 25.088 10.24t24.064 0.512 20.992-4.608 14.848-6.144 21.504-12.8 35.328-21.504 35.84-22.016 23.04-14.336q10.24-6.144 18.432-4.096t16.384 10.24q3.072 3.072 14.848 16.896t25.6 30.72 25.6 32.256 16.896 21.504 11.264 6.656 10.752-3.072 6.144-9.728-2.56-13.312q-2.048-3.072-8.192-18.432l-13.312-32.768q-7.168-18.432-14.336-35.328t-11.264-24.064q-8.192-16.384-8.704-24.576t10.752-15.36q2.048-1.024 23.04-14.848t47.104-30.208 50.176-31.744 33.28-20.48z"
                              p-id="9339"></path>
                    </svg>
                </a>
            </div>
        </div>

        <#--公告-->
        <#if settings.site_notice?? && settings.enable_notice>
            <div class="by_notice by_card_widget">
                <div class="by_card_icon_title  ">
                    <i class="by-font by_icon_gonggao  by_card_title_announcement_animation"></i>
                    <span>公告</span>
                </div>
                <div class="by_notice_content">
                    ${settings.site_notice!}
                </div>
            </div>
        </#if>

        <#--最新文章-->

        <#if posNum != 0 && settings.enable_newest_post>
            <@postTag method="latest" top="${settings.newest_page_size!5}">
                <div class="by_latest by_card_widget">
                    <div class="by_card_icon_title  ">
                        <i class="by-font by_icon_shijian "></i>
                        <span>最新文章 ${posNum}</span>
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
            </@postTag>

        </#if>


        <#--分类-->

        <@categoryTag method="count">
            <#if count != 0 && settings.enable_categories>
                <@categoryTag method="list">
                    <div class="by_aside_categories by_card_widget">
                        <div class="by_card_icon_title  ">
                            <i class="by-font by_icon_fenlei"></i>
                            <span>分类</span>
                        </div>
                        <div class="by_aside_categories_list">
                            <#list categories?sort_by("postCount") ? reverse as category>
                                <a href="${category.fullPath!}" title="${category.name!}"
                                   class="by_aside_categories_item">
                                    <span class="ellipsis">${category.name!}</span>
                                    <span class="ellipsis">${category.postCount!}</span>
                                </a>
                            </#list>
                        </div>
                    </div>
                </@categoryTag>
            </#if>
        </@categoryTag>




        <#--标签-->
        <#if  tagNum != 0 && settings.enable_tags>
            <@tagTag method="list">
                <div class="by_aside_tags by_card_widget">
                    <div class="by_card_icon_title  ">
                        <i class="by-font by_icon_tag"></i>
                        <span>标签</span>
                    </div>
                    <div class="by_aside_tags_list">
                        <#list tags as tag>
                            <a href="${tag.fullPath!}" title="${tag.name!}"
                               data-num="${tag.postCount!}">${tag.name!}</a>
                        </#list>
                    </div>
                </div>
            </@tagTag>
        </#if>


    </aside>
</#macro>
