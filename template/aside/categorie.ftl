<#macro categorie list>
    <div class="by_aside_categories by_card_widget">
        <div class="by_card_icon_title  ">
            <i class="by-font by_icon_fenlei"></i>
            <span>分类</span>
        </div>
        <div class="by_aside_categories_list">
            <#list list?sort_by("postCount") ? reverse as category>
                <a href="${category.fullPath!}" title="${category.name!}" class="by_aside_categories_item">
                    <span class="ellipsis">${category.name!}</span>
                    <span class="ellipsis">${category.postCount!}</span>
                </a>
            </#list>
        </div>
    </div>
</#macro>
