<#import "../module/post_thumbnail.ftl" as tbn>
<#macro post_list post>
    <div class="by_posts_item by_card_widget">
        <a class="by_posts_cover" href="${post.fullPath!}" title="${post.title!}">
            <@tbn.post_thumbnail post=post />
            <img class="lazyload" data-src="${tbn.thumbnail}" src="${lazy_img}" onerror="this.src='${err_img}'"
                 alt="${post.title!}">
        </a>

        <div class="by_posts_info">
            <a href="${post.fullPath!}" title="${post.title!}" class="by_posts_title webkit_box">${post.title!}</a>
            <div class="by_posts_meta">
                <div class="by_posts_wrap webkit_box">
                    <#if post.topped>
                        <div class="sticky">
                            <svg t="1642761547145" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4680" width="200" height="200">
                                <path d="M513.51111111 990.57777778c-264 0-480-216-480-480s216-480 480-480 480 216 480 480S777.51111111 990.57777778 513.51111111 990.57777778zM513.51111111 120.57777778C297.51111111 120.57777778 123.51111111 294.57777778 123.51111111 510.57777778s174 390 390 390 390-174 390-390S729.51111111 120.57777778 513.51111111 120.57777778zM645.51111111 510.57777778C633.51111111 510.57777778 621.51111111 504.57777778 609.51111111 492.57777778l0 0-54-60 0 270c0 24-18 42-48 42-24 0-42-18-42-42L465.51111111 432.57777778l-54 60 0 0C405.51111111 504.57777778 393.51111111 510.57777778 375.51111111 510.57777778 351.51111111 510.57777778 333.51111111 492.57777778 333.51111111 468.57777778c0-12 6-24 12-30l0 0 132-150 0 0C483.51111111 276.57777778 495.51111111 270.57777778 513.51111111 270.57777778c12 0 24 6 36 18l0 0 132 150 0 0C687.51111111 444.57777778 693.51111111 456.57777778 693.51111111 468.57777778 693.51111111 492.57777778 675.51111111 510.57777778 645.51111111 510.57777778z"
                                      p-id="4681" fill="#ff7242"></path>
                            </svg>
                            <span>置顶</span>
                            <span class="separator"> |</span>
                        </div>
                    </#if>

                    <div>
                        <svg t="1642762307873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="17052" width="200" height="200">
                            <path d="M766 960.4H259.6c-85.1 0-154.1-69-154.1-154.1V354.2c0-85.1 69-154.1 154.1-154.1H766c85.1 0 154.1 69 154.1 154.1v452.1c-0.1 85.1-69 154.1-154.1 154.1z"
                                  fill="#83A4FF" p-id="17053"></path>
                            <path d="M766 933.2H259.6c-85.1 0-154.1-69-154.1-154.1v-452c0-85.1 69-154.1 154.1-154.1H766c85.1 0 154.1 69 154.1 154.1v452.1c-0.1 85-69 154-154.1 154z"
                                  fill="#5B79FB" p-id="17054"></path>
                            <path d="M766 906.1H259.6c-85.1 0-154.1-69-154.1-154.1V299.9c0-85.1 69-154.1 154.1-154.1H766c85.1 0 154.1 69 154.1 154.1V752c-0.1 85.1-69 154.1-154.1 154.1z"
                                  fill="#83A4FF" p-id="17055"></path>
                            <path d="M739 381.2H286.5c-12.4 0-22.6-10.2-22.6-22.6 0-12.4 10.2-22.6 22.6-22.6H739c12.4 0 22.6 10.2 22.6 22.6 0.1 12.4-10.1 22.6-22.6 22.6z"
                                  fill="#5B79FB" p-id="17056"></path>
                            <path d="M523.4 815.6H312.1c-12.4 0-22.6-10.2-22.6-22.6 0-12.4 10.2-22.6 22.6-22.6h211.3c12.4 0 22.6 10.2 22.6 22.6 0 12.4-10.2 22.6-22.6 22.6zM685.5 815.6h-83c-12.4 0-22.6-10.2-22.6-22.6 0-12.4 10.2-22.6 22.6-22.6h83c12.4 0 22.6 10.2 22.6 22.6 0 12.4-10.1 22.6-22.6 22.6z"
                                  fill="#E5ECFF" p-id="17057"></path>
                            <path d="M349.3 659.1c54.7-49.7 91.4-89.4 91.4-121.1 0-20-11.2-30.9-28.5-30.9-15 0-26.8 10-37 21.2L346.7 500c21.5-22.6 41.5-33.8 72.6-33.8 42.3 0 71.7 27 71.7 68.8 0 37.6-32.3 79.1-65.9 112.9 10.9-1.5 25.9-2.9 35.6-2.9H501v44.1H349.3v-30zM523 662.6l24.1-32.9c13.2 12.6 28.5 21.2 45.6 21.2 20.3 0 33.5-8.5 33.5-25 0-18.8-10-30-55.9-30v-36.8c37.3 0 49.1-11.5 49.1-28.8 0-15-8.8-23.2-25-23.2-14.7 0-25.9 6.8-39.1 18.2l-26.5-32c20.3-17.1 42-27 67.9-27 45.3 0 75 21.2 75 60.3 0 21.8-11.8 38.8-35.3 48.2v1.5c24.4 7.3 42.3 25 42.3 53.2 0 40.9-37.3 63.8-80.9 63.8-34.5-0.1-58.9-12.1-74.8-30.7z"
                                  fill="#FFFFFF" p-id="17058"></path>
                            <path d="M368 245.4m-63.4 0a63.4 63.4 0 1 0 126.8 0 63.4 63.4 0 1 0-126.8 0Z" fill="#5B79FB"
                                  p-id="17059"></path>
                            <path d="M648.5 245.4m-63.4 0a63.4 63.4 0 1 0 126.8 0 63.4 63.4 0 1 0-126.8 0Z"
                                  fill="#5B79FB" p-id="17060"></path>
                            <path d="M368 290.7c-30 0-54.3-24.3-54.3-54.3V118.7c0-30 24.3-54.3 54.3-54.3 30 0 54.3 24.3 54.3 54.3v117.7c0 29.9-24.3 54.3-54.3 54.3z"
                                  fill="#FF7E71" p-id="17061"></path>
                            <path d="M368 254.5c-30 0-54.3-24.3-54.3-54.3v36.2c0 30 24.3 54.3 54.3 54.3s54.3-24.3 54.3-54.3v-36.2c0 29.9-24.3 54.3-54.3 54.3z"
                                  fill="#F7554D" p-id="17062"></path>
                            <path d="M648.5 290.7c-30 0-54.3-24.3-54.3-54.3V118.7c0-30 24.3-54.3 54.3-54.3 30 0 54.3 24.3 54.3 54.3v117.7c0 29.9-24.3 54.3-54.3 54.3z"
                                  fill="#FF7E71" p-id="17063"></path>
                            <path d="M648.5 254.5c-30 0-54.3-24.3-54.3-54.3v36.2c0 30 24.3 54.3 54.3 54.3s54.3-24.3 54.3-54.3v-36.2c0 29.9-24.3 54.3-54.3 54.3z"
                                  fill="#F7554D" p-id="17064"></path>
                        </svg>
                        <time datetime="${post.createTime?string('yyyy-MM-dd')}"
                              title="发表于 ${post.createTime?string('yyyy-MM-dd')}">
                            发布于 ${post.createTime?string('yyyy-MM-dd')}</time>
                        <span class="separator"> |</span>
                    </div>
                    <div>
                        <svg t="1642762930351" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="17474" width="200" height="200">
                            <path d="M481.28 801.792h61.44v77.824h-61.44zM798.72 481.28h77.824v61.44H798.72zM136.192 481.28h77.824v61.44h-77.824z"
                                  fill="#63F7DE" p-id="17475"></path>
                            <path d="M512 955.392C267.264 955.392 68.608 756.736 68.608 512c0-125.952 54.272-246.784 147.456-330.752l54.272 61.44C193.536 311.296 150.528 409.6 150.528 512c0 199.68 162.816 361.472 361.472 361.472S873.472 711.68 873.472 512C873.472 274.432 675.84 150.528 481.28 150.528v-81.92c235.52 0 474.112 152.576 474.112 443.392 0 244.736-198.656 443.392-443.392 443.392z"
                                  fill="#437DFF" p-id="17476"></path>
                            <path d="M481.28 75.776h81.92v443.392h-81.92z" fill="#437DFF" p-id="17477"></path>
                            <path d="M499.67104 468.7872l63.6928 51.52768-108.83072 134.5536-63.6928-51.52768z"
                                  fill="#437DFF" p-id="17478"></path>
                        </svg>
                        <time>更新于 <@global.timeline datetime=post.updateTime /></time>
                    </div>
                </div>
                <div class="by_posts_wrap webkit_box">
                    <div class="ato">
                        <svg t="1642764351154" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="9421" width="200" height="200">
                            <path d="M136 232v560h752V360H525.255a104 104 0 0 1-73.54-30.46L354.178 232H136z m-40-72h274.745a32 32 0 0 1 22.628 9.373l109.254 109.254A32 32 0 0 0 525.255 288H928c17.673 0 32 14.327 32 32v512c0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V192c0-17.673 14.327-32 32-32z m296 464h240a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H392a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8z"
                                  fill="#5090F1" p-id="9422"></path>
                        </svg>
                        <#list post.categories as category>
                            <a href="${category.fullPath!}" title="${category.name!}">${category.name!}</a>
                        </#list>
                        <span class="separator"> |</span>

                    </div>
                    <div class="ato">
                        <svg t="1642764333966" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="7876" width="200" height="200">
                            <path d="M791.552 1002.496L513.024 875.52l-91.136 45.056-35.84-73.728 107.52-53.248 35.84-1.024L766.976 901.12V242.688H257.024v559.104h-81.92V201.728l40.96-40.96h591.872l40.96 40.96v762.88z"
                                  fill="#437DFF" p-id="7877"></path>
                            <path d="M481.28 21.504h61.44v309.248h-61.44z" fill="#63F7DE" p-id="7878"></path>
                            <path d="M512 518.144c-63.488 0-114.688-51.2-114.688-114.688 0-63.488 51.2-114.688 114.688-114.688s114.688 51.2 114.688 114.688c0 63.488-51.2 114.688-114.688 114.688z m0-167.936c-29.696 0-53.248 23.552-53.248 53.248 0 29.696 23.552 53.248 53.248 53.248s53.248-23.552 53.248-53.248c0-29.696-23.552-53.248-53.248-53.248z"
                                  fill="#437DFF" p-id="7879"></path>
                        </svg>
                        <#list post.tags as tag>
                            <a href="${tag.fullPath!}" title="${tag.name!}">${tag.name!}</a>
                        </#list>
                    </div>
                    <div class="ato">
                        <svg t="1642764237207" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="6361" width="200" height="200">
                            <path d="M566.15 759.858l28.124-4.974c88.974-15.736 168.055-56.935 224.522-115.51C874.514 581.577 905 510.333 905 435.5 905 257.462 731.186 109 512.5 109S120 257.462 120 435.5c0 74.676 30.357 145.778 85.859 203.516 56.238 58.504 135.023 99.744 223.725 115.664l28.018 5.029 54.316 97.736 54.233-97.587z m-147.165 53.879C213.946 776.937 60 621.574 60 435.5 60 222.042 262.591 49 512.5 49S965 222.042 965 435.5c0 186.465-154.593 342.09-360.277 378.467l-49.1 88.352a50 50 0 0 1-19.417 19.417c-24.137 13.414-54.579 4.72-67.993-19.417l-49.228-88.582z"
                                  fill="#2F54EB" p-id="6362"></path>
                            <path d="M457.5 435.5c0-30.376 24.624-55 55-55s55 24.624 55 55-24.624 55-55 55-55-24.624-55-55z m-183 0c0-30.376 24.624-55 55-55s55 24.624 55 55-24.624 55-55 55-55-24.624-55-55z m365 0c0-30.376 24.624-55 55-55s55 24.624 55 55-24.624 55-55 55-55-24.624-55-55z"
                                  fill="#85A5FF" p-id="6363"></path>
                        </svg>
                        <a href="${post.fullPath!}" title="${post.title!}">${post.commentCount!0}</a>
                        <span> 评论</span>
                    </div>
                </div>

            </div>

            <div class="by_posts_content webkit_box">
                ${post.summary!}
            </div>

        </div>
    </div>
</#macro>