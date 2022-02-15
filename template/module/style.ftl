<#macro style type top_background_img>
    <style type="text/css">
        @font-face {
            font-family: "Butterfly Font";
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        <#--body背景颜色/图-->
        html {
        <#if settings.body_background?contains("http")> --global-bg: url(${settings.body_background!}) no-repeat fixed center / 100%;
        <#else> --global-bg: ${settings.body_background!};
        </#if>
        }

        <#--顶部背景处理-->
        <#if settings.enable_top_background_img  &&  settings['enable_top_${type}_background_img'] >
        html #Butterfly header {
            background-image: url(${(top_background_img == '')?then(settings.top_index_background_img,top_background_img)})
        }
        <#else>
        html #Butterfly header {height: 60px;}
        html #Butterfly header::before {display: none;}
        </#if>
        <#--最大内容宽度-->
        #Butterfly .by_main {
            max-width: ${settings.content_max_width!}
        }

        <#--侧边栏翻转-->
        <#if settings.aside_position == 'left' >
        #Butterfly .by_main {
            flex-direction: row-reverse;
        }

        #Butterfly .by_main .by_aside {
            padding: 0 15px 0 0;
        }

        </#if>
        <#--导航栏居中-->
        <#if settings.nav_center  >
        #Butterfly .by_nav {justify-content: center;}
        #Butterfly .by_nav  .by_blog_title{display:none;}

        </#if>
        <#--导航栏翻转-->
        <#if settings.nav_reverse  >
        #Butterfly .by_nav {
            flex-direction: row-reverse;
        }
        </#if>
    </style>
</#macro>
