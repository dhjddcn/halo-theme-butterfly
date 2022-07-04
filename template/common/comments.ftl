<#macro comment target,type>

		<#if (!target.disallowComment!false)>
			<hr>

			<div class="by_comment_title">
				<i class="by-font by_icon_b"></i>
				评论 | 
				<span class="by_comment_subtitle">${target.commentCount!0}条评论</span>
			</div>
    	<halo-comment id='${target.id?c}' type='${type}'/>
		</#if>

</#macro>