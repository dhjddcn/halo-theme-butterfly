<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.journals_title!}"
type="journals"
top_background_img="${settings.top_journals_background_img!}"
enable_aside=settings.enable_journals_aside
>
    <script src="${theme_base!}/source/lib/vue/vue.min.js"></script>
    <#if journals.content?? && journals.content?size gt 0>
        <#--  <#list journals.content as journal>

            <div class="by_journal_item">
                <time datetime="${journal.createTime?string('yyyy-MM-dd')}"
                      class="by_journal_item_meta">${journal.createTime?string('yyyy-MM-dd')}</time>
                <div class="by_journal_item_content"> ${journal.content!}</div>
            </div>
        </#list>  -->
      <ul class="by_journals">
        <#list journals.content as journal>
          <li class="by_journal_item" data-cid="${journal.id?c}">
            <div class="by_journal_header">
              <img class="by_journal_avatar" src="${user.avatar!}" alt="${user.nickname!}">
              <div class="by_journal_info">
                <div class="by_journal_nick">
                  ${user.nickname!}
                </div>
                <div class="by_journal_time">
                  ${journal.createTime?string("yyyy-MM-dd HH:mm")}
                </div>
              </div>
            </div>
            <div class="by_journal_meta">
                <div class="by_journal_content">
                    ${journal.content!}
                </div>
                <div class="by_journal_footer">
                    <div class="by_journal_likes">
                      <i class="by-font by_icon_xihuan-fill"></i>
                      <i class="by-font by_icon_xihuan"></i>
                      <span data-journal-id-likes="${journal.id?c}">${journal.likes!0}</span>
                    </div>
                    <div class="by_journal_comment">
                      <i class="by-font by_icon_message"></i>
                      ${journal.commentCount!0}
                    </div>
                </div>
            </div>
          </li>
        </#list>
      </ul>
    <#else>
        <@empty showBg = false/>
    </#if>


</@layout>
