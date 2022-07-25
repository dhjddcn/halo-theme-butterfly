<#--文章-->
<#macro Posts method  display   >
    <ul class="posts_content">
        <#list posts.content as post>
            <li class="posts_item widget">
                <a class="cover" href="${post.fullPath!}" title="${post.title!}">
                    <@Post_thumbnail thumbnail=post.thumbnail />
                    <img
                            src="${lazy_img}"
                            data-lazy-src="${cover!}"
                            onerror="this.src='${err_img}'"
                            alt="${post.title!}"
                    />
                </a>
                <div class="info">
                    <a class="info_title" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                    <div class="info_meta">
                        <span class="item createTime">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 55">
                                <path
                                        stroke-linejoin="round" stroke-width="4" stroke="#333"
                                        d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V19ZM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5V9Z"
                                        data-follow-stroke="#333"/>
                                <path stroke-linejoin="round" stroke-linecap="round"
                                      stroke-width="4" stroke="#333"
                                      d="M16 4v8M32 4v8M28 34h6M14 34h6M28 26h6M14 26h6"
                                      data-follow-stroke="#333"/>
                            </svg>
                            <time datetime="${post.createTime?string('yyyy-MM-dd')}">
                                发表于<@global.timeline datetime=post.createTime />
                            </time>
                        </span>

                        <span class="item updateTime">
                            <svg viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                                      fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                                <path
                                        d="M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883" stroke="#333"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <time datetime="${post.updateTime?string('yyyy-MM-dd')}">
                                更新于<@global.timeline datetime=post.updateTime />
                            </time>
                        </span>

                        <span class="item visits">
                            <svg viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z"
                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                                <path
                                        d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                            </svg>
                            <span>
                                预览 ${post.visits!0}
                            </span>
                        </span>


                    </div>
                    <#--                    <div class="info_meta">-->
                    <#--                        <span class="item commentCount">-->
                    <#--                            <svg viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path-->
                    <#--                                        d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="#333" stroke-width="4"-->
                    <#--                                        stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21H25.0025"-->
                    <#--                                                                                              stroke="#333"-->
                    <#--                                                                                              stroke-width="4"-->
                    <#--                                                                                              stroke-linecap="round"/><path-->
                    <#--                                        d="M33.001 21H34.9999" stroke="#333" stroke-width="4" stroke-linecap="round"/><path-->
                    <#--                                        d="M13.001 21H14.9999" stroke="#333" stroke-width="4"-->
                    <#--                                        stroke-linecap="round"/></svg>-->
                    <#--                            <span>-->
                    <#--                               ${post.commentCount!0} 条评论-->
                    <#--                            </span>-->
                    <#--                        </span>-->

                    <#--                        <span class="item categories">-->
                    <#--                            <svg viewBox="0 0 48 40" fill="none"-->
                    <#--                                 xmlns="http://www.w3.org/2000/svg"><path-->
                    <#--                                        d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"-->
                    <#--                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path-->
                    <#--                                        d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"-->
                    <#--                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path-->
                    <#--                                        d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"-->
                    <#--                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path-->
                    <#--                                        d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"-->
                    <#--                                        fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/></svg>-->
                    <#--                            <span>-->
                    <#--                                  <#list post.categories as category>-->
                    <#--                                      <a class="link" href="${category.fullPath!}"-->
                    <#--                                         title="${category.name!}">${category.name!}</a>-->
                    <#--                                  </#list>-->
                    <#--                            </span>-->
                    <#--                        </span>-->

                    <#--                        <span class="item tags">-->
                    <#--                     <svg viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path-->
                    <#--                                 d="M34 10V4H8V38L14 35" stroke="#333" stroke-width="4" stroke-linecap="round"-->
                    <#--                                 stroke-linejoin="round"/><path d="M14 44V10H40V44L27 37.7273L14 44Z" fill="none"-->
                    <#--                                                                stroke="#333" stroke-width="4" stroke-linejoin="round"/></svg>-->
                    <#--                            <span>-->
                    <#--                             <#list post.tags as tag>-->
                    <#--                                 <a class="link" href="${tag.fullPath!}" title="${tag.name!}">${tag.name!}</a>-->
                    <#--                             </#list>-->
                    <#--                            </span>-->
                    <#--                        </span>-->


                    <#--                    </div>-->
                    <div class="info_content">${post.summary!}</div>
                    <#if post.topped>
                        <div class="info_top">
                            <svg t="1658765684294" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="7193" width="25">
                                <path d="M876.8 572.586667l-218.88-213.333334c-5.12-5.12-11.52-8.533333-17.92-11.52V128h42.666667c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666666H341.76c-23.466667 0-42.666667 19.2-42.666667 42.666666s19.2 42.666667 42.666667 42.666667h42.666667v219.733333c-6.4 2.986667-12.373333 6.826667-17.92 11.946667l-218.88 213.333333c-18.773333 18.346667-24.32 45.653333-14.506667 69.973334s33.28 39.68 59.306667 39.68H469.333333v256c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666v-256h277.333333c26.026667 0 49.493333-15.786667 59.306667-40.106667 9.813333-23.893333 4.266667-51.626667-14.506667-69.973333zM554.666667 128v213.333333h-84.906667V128H554.666667zM244.906667 597.333333l175.36-170.666666h184.32l175.36 170.666666H244.906667z"
                                      p-id="7194"></path>
                            </svg>
                        </div>
                    </#if>
                </div>
            </li>
        </#list>
    </ul>
    <@Pagination  method display  />
</#macro>


<#--文章图片-->
<#macro Post_thumbnail thumbnail>
    <#assign cover = thumbnail!?trim>
    <#if cover == "">
    <#--默认图-->
        <#if settings.enable_post_thumbnail  && !settings.enable_random_img_api>
            <#assign cover = settings.post_thumbnail>
        </#if >
    <#--随机图-->
        <#if settings.enable_random_img_api  && settings.random_img_api != "">
            <#assign cover = settings.random_img_api>
        </#if >
    </#if>
</#macro>


<#-- 页码-->
<#macro Pagination method  display = "3" keyword="" slug="">
    <@paginationTag method=method  keyword="${keyword!}" slug="${slug!}" page="${posts.number}" total="${posts.totalPages}" display=display >
        <ul class="pagination">
            <#if pagination.hasPrev>
                <li class="pagination_page prev">
                    <a rel="prev" href="${pagination.prevPageFullPath!}" title="上一页"></a>
                </li>
            </#if>

            <#list pagination.rainbowPages as number>
                <#if number.isCurrent>
                    <li class="pagination_page active">
                        <a href="${number.fullPath!}" rel="index">${number.page!}</a>
                    </li>
                <#else >
                    <li class="pagination_page">
                        <a href="${number.fullPath!}" rel="index">${number.page!}</a>
                    </li>
                </#if>
            </#list>

            <#if pagination.hasNext>
                <li class="pagination_page next">
                    <a rel="next" href="${pagination.nextPageFullPath!}" title="下一页"></a>
                </li>
            </#if>
        </ul>
    </@paginationTag>
</#macro>
