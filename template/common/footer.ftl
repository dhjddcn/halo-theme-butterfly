<#macro footer  >
    <footer class="by_footer center">
        <p>
            ${.now ? string("yyyy")} ©<a href="${blog_url!}" target="_blank"
                                         rel="noopener noreferrer">${user.nickname!}</a>
            <#if settings.icp??> - <a href="https://beian.miit.gov.cn"
                                      rel="noopener noreferrer">${settings.icp!}</a></#if>
		 		    <#if settings.police??> - <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${settings.police?replace('[^\\d]','','ri')}" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
             <img src="/themes/butterfly/source/img/gaba.png" style="float:left;"/>${settings.police}</a></#if>
        </p>
        <p class="by_site_powered">Powered by<a class="by_a_powered" href="https://halo.run/" target="_blank"
                                                >Halo</a>&nbsp;|&nbsp;🌈 Theme by<a
                    class="by_a_theme" title="当前主题：Butterfly V${theme.version!}" href="${theme.repo!}" target="_blank"
                    rel="noopener noreferrer">小红</a></p>
        <#--统计代码，底部信息-->
    </footer>
</#macro>
