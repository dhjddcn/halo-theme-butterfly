<#assign thumbnail = post.thumbnail!?trim>
<#if thumbnail == "">
<#--默认图-->
    <#if settings.enable_post_thumbnail >
        <#assign thumbnail = settings.post_thumbnail>
    </#if >
<#--随机图-->
    <#if settings.enable_random_img_api  && settings.random_img_api != "">
        <#assign thumbnail = settings.random_img_api>
    </#if >
</#if>
