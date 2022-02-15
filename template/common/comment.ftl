<#macro comment post,type>
    <#if !post.disallowComment!false>
        <div class="by_comment">
            <h3 >评论</h3>
            <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
            <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
            <halo-comment id="${post.id?c}" type="${type}"/>
        </div>
    </#if>
</#macro>
