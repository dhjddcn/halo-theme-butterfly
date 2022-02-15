<#include "template/layout.ftl">
<#include "template/common/empty.ftl">
<@layout
title="${settings.journals_title!}"
type="journals"
top_background_img="${settings.top_journals_background_img!}"
enable_aside=settings.enable_journals_aside
>
    <script type="text/javascript" src="${BASE_RES_URL!}/source/js/by.photos.js"></script>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL!}/source/css/min/by.photos.min.css">
    <div id="by_gallery_page">
        <div class="by_gallery_group_main">
            <@photoTag method="listTeams">
                <#list teams as team>
                    <figure class="by_gallery_group">
                        <img class="by_gallery_group_img no-lightbox entered loaded" src="https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png" data-lazy-src="https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png" alt="Group-Image-Gallery" data-ll-status="loaded">
                        <figcaption>
                            <div class="by_gallery_group_name">${team.team}</div>
                            <p>相册简介</p>
                            <a id="by_gallery_uri" herf="https://blog.milank.cn" data-pjax-state=""></a>
                        </figcaption>
                    </figure>
                </#list>
            </@photoTag>
        </div>
    </div>

</@layout>