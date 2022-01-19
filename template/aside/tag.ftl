<#macro tag list>
    <div class="by_aside_tags by_card_widget">
        <div class="by_card_icon_title  ">
            <i class="by-font by_icon_tag"></i>
            <span>标签</span>
        </div>
        <div class="by_aside_tags_list">
                <#list list as tag>
                    <a href="${tag.fullPath!}" title="${tag.name!}" data-num="${tag.postCount!}">${tag.name!}</a>
                </#list>
        </div>
    </div>
</#macro>
