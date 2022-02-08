<#macro style type top_background_img>
    <style type="text/css">
        @font-face {
            font-family: "Butterfly Font";
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        html {
        <#if settings.body_background?contains("http")> --global-bg: url(${settings.body_background!}) no-repeat fixed center / 100%;
        <#else> --global-bg: ${settings.body_background!};
        </#if>
        }

        #Butterfly .by_main {
            max-width: ${settings.content_max_width!}
        }

        <#if settings.aside_position == 'left' >
        #Butterfly .by_main {
            flex-direction: row-reverse;
        }

        #Butterfly .by_main .by_aside {
            padding: 0 15px 0 0;
        }

        </#if>


        <#if settings.enable_top_background_img  &&  settings['enable_top_${type}_background_img'] >

        html #Butterfly header {
            background-image: url(${top_background_img!})
        }

        <#else>
        html #Butterfly header {
            height: 60px;
        }

        html #Butterfly header::before {
            display: none;
        }

        </#if>


        <#--        <#if !settings.enable_home_aside>-->
        <#--        #Butterfly.by_index .by_main .by_aside {-->
        <#--            display: none;-->
        <#--        }-->

        <#--        #Butterfly.by_index .by_main .by_container {-->
        <#--            width: 100%;-->
        <#--        }-->

        <#--        </#if>-->

        <#--        <#if !settings.enable_post_aside>-->
        <#--        #Butterfly.by_post .by_main .by_aside {-->
        <#--            display: none;-->
        <#--        }-->

        <#--        #Butterfly.by_post .by_main .by_container {-->
        <#--            width: 100%;-->
        <#--        }-->

        <#--        </#if>-->


    </style>
</#macro>
