<#macro comment target,type>
	<#--  <#if (!target.disallowComment!false)>
	</#if>  -->
		<hr>

    <halo-comment id='${target.id?c}' type='${type}' configs='${configs}'/>

</#macro>