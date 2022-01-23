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
            <#assign site_btn=settings.site_btn?split('||')>
            <a class="by_btn" href="${site_btn[1]}" target="_blank">
                ${site_btn[0]}
            </a>
            <div class="by_user_social_icons center">
                <#if settings.github != '' >
                    <a href="${settings.github!}" target="_blank" title="github">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22"
                             height="22">
                            <path d="M512 95.872a426.666667 426.666667 0 0 0-134.912 831.445333c21.333333 3.754667 29.312-9.045333 29.312-20.266666 0-10.112-0.512-43.733333-0.512-79.445334-107.221333 19.712-134.954667-26.154667-143.488-50.133333a155.136 155.136 0 0 0-43.733333-60.288c-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333a85.376 85.376 0 0 1 65.621333 43.733333 91.178667 91.178667 0 0 0 124.245334 35.2 89.770667 89.770667 0 0 1 27.221333-57.088c-94.933333-10.666667-194.133333-47.445333-194.133333-210.645333a166.058667 166.058667 0 0 1 43.733333-114.688 153.344 153.344 0 0 1 4.266667-113.066667s35.712-11.178667 117.333333 43.733333a402.218667 402.218667 0 0 1 213.333333 0c81.578667-55.466667 117.333333-43.733333 117.333334-43.733333a153.301333 153.301333 0 0 1 4.266666 113.066667 165.077333 165.077333 0 0 1 43.733334 114.688c0 163.712-99.754667 199.978667-194.688 210.645333a101.034667 101.034667 0 0 1 28.8 78.933333c0 57.088-0.512 102.954667-0.512 117.333334 0 11.221333 7.978667 24.533333 29.312 20.266666A426.88 426.88 0 0 0 512 95.872z"
                                  fill="#333333"></path>
                        </svg>
                    </a>
                </#if>
                <#if settings.zhihu != '' >
                    <a href="${settings.zhihu!}" target="_blank" title="知乎">
                        <svg viewBox="0 0 32 24" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22"
                             height="22">
                            <path d="M15.0737 5.80396H15.0757L18.706 2.91722L15.0757 0.00406298L15.0717 0L11.4475 2.91112L15.0717 5.80193L15.0737 5.80396ZM15.0757 14.9111L15.0778 14.9091L24.4429 7.52057L21.9036 5.48096L15.0778 10.8664L15.0757 10.8685L15.0737 10.8705L8.2479 5.48502L5.71057 7.52463L15.0737 14.9132L15.0757 14.9111ZM15.0716 19.9614L15.0757 19.9593L27.614 10.066L30.1534 12.1056L24.449 16.6053L15.0757 24L0.243779 12.3047L0 12.1117L2.53936 10.0721L15.0716 19.9614Z"
                                  fill="#1E80FF"></path>
                        </svg>
                    </a>                </#if>

                <#if settings.email != '' >
                    <a href="${settings.email!}" target="_blank" title="邮箱">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="21"
                             height="22">
                            <path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m341.333333-426.666667a341.333333 341.333333 0 1 0-169.301333 294.869333l-43.008-73.685333A256 256 0 1 1 768 512v42.666667a42.666667 42.666667 0 0 1-85.333333 0V384h-57.770667a170.666667 170.666667 0 1 0 2.816 253.44A128 128 0 0 0 853.333333 554.666667v-42.666667z m-341.333333-85.333333a85.333333 85.333333 0 1 1 0 170.666666 85.333333 85.333333 0 0 1 0-170.666666z"
                                  fill="#dc4835"></path>
                        </svg>
                    </a>
                </#if>

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

        <#if is_post??>

        <div class="by_post_sticky">
            <#--文章页目录-->
            <div class="by_catalogue by_card_widget">
                <div class="by_card_icon_title  ">
                    <i class="by-font by_icon_wengao "></i>
                    <span>目录</span>
                </div>

                <div id="js-toc" class="toc"></div>
            </div>
            </#if>

            <#--最新文章-->
            <#if posNum != 0 && settings.enable_newest_post>
                <@postTag method="latest" top="${settings.newest_page_size!5}">
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
            <#if is_post??></div></#if>
    </aside>
</#macro>
