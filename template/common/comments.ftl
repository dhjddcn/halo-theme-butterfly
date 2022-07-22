<#macro comment target,type>

		<#if (!target.disallowComment!false)>
			<#if type != 'journal'>
			<hr>

			<div class="by_comment_title">
				<i class="by-font by_icon_b"></i>
				评论 | 
				<span class="by_comment_subtitle">${target.commentCount!0}条评论</span>
			</div>
			</#if>
    	<#assign sys_options = '{"blog_logo": "${options.blog_logo!}", "gravatar_source": "${options.gravatar_source!}", "comment_gravatar_default": "${options.comment_gravatar_default!}"}'>
			<#assign configs = '{"autoLoad": "${settings.enable_comment_autoload?string}", "showUserAgent": "${settings.enable_comment_ua?string}", "gravatarSource": "${settings.gravatar_source!}", "loadingStyle": "${settings.comment_loading_style}", "authorPopup": "${settings.comment_author_poptext!}", "emailPopup": "${settings.comment_email_poptext!}", "aWord": "${settings.comment_aword!}", "avatarLoading": "${settings.comment_avatar_loading!}", "avatarError": "${settings.comment_avatar_error!}", "notComment": "${settings.comment_empty_text!}"}'>
			<halo-comment id='${target.id?c}' type='${type}' configs='${configs}' options='${sys_options}'/>
		</#if>

</#macro>