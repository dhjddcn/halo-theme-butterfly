<#macro style>
    <style type="text/css">
        @font-face {
            font-family: "Butterfly Font";
            font-display: swap;
            src: url(${BASE_RES_URL!}/source/font/${settings.web_font!}) format("woff2");
        }

        body {
        <#if settings.body_background?contains("http")> background-image: url(${settings.body_background!})<#else> background: ${settings.body_background!}</#if>
        }

        #Butterfly .by_main{
            max-width:${settings.content_max_width!}
        }


    </style>
</#macro>
