<#macro footer  >
    <footer class="by_footer center">
        <p>
            ${.now ? string("yyyy")} ©<a href="${blog_url!}" target="_blank"
                                         rel="noopener noreferrer">${user.nickname!}</a>
            <#if settings.icp??> - <a href="https://beian.miit.gov.cn"
                                      rel="noopener noreferrer">${settings.icp!}</a></#if>
        </p>
    </footer>
</#macro>
