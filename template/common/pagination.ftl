<#macro pagination  method='index' slug="" display = "3">
    <@paginationTag method="${method!}"  slug="${slug!}" page="${posts.number}" total="${posts.totalPages}" display="3">
        <ul class="by_pagination">
            <#if pagination.hasPrev>
                <li class="by_pagination_item">
                    <a class="by_pagination_prev" href="${pagination.prevPageFullPath!}" title="上一页">
                        <i class="by-font by_icon_zuo"></i>
                    </a>
                </li>
            </#if>

            <#list pagination.rainbowPages as number>
                <#if number.isCurrent>
                    <li class="by_pagination_item active">
                        <a href="${number.fullPath!}">${number.page!}</a>
                    </li>
                <#else>
                    <li class="by_pagination_item">
                        <a href="${number.fullPath!}">${number.page!}</a>
                    </li>
                </#if>
            </#list>


            <#if pagination.hasNext>
                <li class="by_pagination_item">
                    <a class="by_pagination_next" href="${pagination.nextPageFullPath!}" title="下一页">
                        <i class="by-font by_icon_you"></i>
                    </a>
                </li>
            </#if>
        </ul>
    </@paginationTag>
</#macro>
