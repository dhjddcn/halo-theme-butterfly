<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.journals_title!}"
type="journals"
top_background_img="${settings.top_journals_background_img!}"
enable_aside=settings.enable_journals_aside
>
    <#--  <#if journals.content?? && journals.content?size gt 0>
        <#list journals.content as journal>

            <div class="by_journal_item">
                <time datetime="${journal.createTime?string('yyyy-MM-dd')}"
                      class="by_journal_item_meta">${journal.createTime?string('yyyy-MM-dd')}</time>
                <div class="by_journal_item_content"> ${journal.content!}</div>
            </div> 
        </#list>
    <#else>
        <@empty showBg = false/>
    </#if>  -->
     <div class="container mx-auto px-4 mt-16 max-w-6xl tracking-wider md:leading-relaxed sm:leading-normal
                ct-container cn-pd content-container is-container" id="moreContainer">
      <div id="ziyan-list">
        <div style="position: relative">
            <#list journals.content as journal>
              <div class="ziyan" style="transform-origin: center top;">
                <div class="ziyan-content">
                  <div class="ziyan-header">
                    <span class="ziyan-username">${user.nickname!}</span>
                    <span class="is-verified-badge"></span>
                    <span class="ziyan-text">·</span>
                    <span class="ziyan-date time-ago" time="${journal.createTime?string("yyyy-MM-dd HH:mm:ss")}"></span>
                  </div>
                  <div class="ziyan-body markdown-body md-content">
                      ${journal.content!}
                  </div>
                  <div class="ziyan-footer" style="display: none">
                    <a class="ziyan-icon ziyan-reaction  ">
                      <div class="is-icon-reaction-wrap">
                        <span class="iconfont icon-like"></span>
                      </div>
                      <span class="is-reaction-count">
                                            ${journal.likes}
                                        </span>
                    </a>
                  </div>
                </div>
              </div>
            </#list>
        </div>
      </div>
    </div>
                <div class="container mx-auto px-4 content-container <#if !(settings.posts_style!true)>mx-850</#if>">
                    <nav class="pagination flex flex-row justify-center mt-8" role="navigation"
                    aria-label="pagination">
                         <#if journals.totalPages gt 1>
                            <@paginationTag method="journals" page="${journals.number}" total="${journals.totalPages}" display="3">
                                <#include "module/widget/more.ftl">
                            </@paginationTag>
                        </#if>
                    </nav>
                </div>


</@layout>