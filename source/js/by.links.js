/**
 * @Description: 友情链接
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.links
 */

const linksContext = {
    initTagBg() {
        const $links = $( '.by_link_card .info' );
        const colors = [
            "linear-gradient(120deg, rgb(137, 247, 254) 0%, rgb(102, 166, 255) 100%)",
            "linear-gradient(to top, rgb(253, 219, 146) 0%, rgb(209, 253, 255) 100%)",
            "linear-gradient(to top, rgb(152, 144, 227) 0%, rgb(177, 244, 207) 100%)",
            "linear-gradient(to top, rgb(235, 192, 253) 0%, rgb(217, 222, 216) 100%)",
            "linear-gradient(to top, rgb(150, 251, 196) 0%, rgb(249, 245, 134) 100%)",
            "linear-gradient(rgb(42, 245, 152) 0%, rgb(0, 158, 253) 100%)",
            "linear-gradient(to top, rgb(205, 156, 242) 0%, rgb(246, 243, 255) 100%)",
            "linear-gradient(to right, rgb(228, 175, 203) 0%, rgb(184, 203, 184) 0%, rgb(184, 203, 184) 0%, rgb(226, 197, 139) 30%, rgb(194, 206, 156) 64%, rgb(126, 219, 220) 100%)",
            "linear-gradient(to right, rgb(184, 203, 184) 0%, rgb(184, 203, 184) 0%, rgb(180, 101, 218) 0%, rgb(207, 108, 201) 33%, rgb(238, 96, 156) 66%, rgb(238, 96, 156) 100%)",
            "linear-gradient(to right, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%)",
            "linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%)",
            "linear-gradient(to top, rgb(55, 236, 186) 0%, rgb(114, 175, 211) 100%)",
            "linear-gradient(to top, rgb(235, 187, 167) 0%, rgb(207, 199, 248) 100%)",
            "linear-gradient(to top, rgb(255, 241, 235) 0%, rgb(172, 224, 249) 100%)",
            "linear-gradient(to right, rgb(238, 162, 162) 0%, rgb(187, 193, 191) 19%, rgb(87, 198, 225) 42%, rgb(180, 159, 218) 79%, rgb(122, 197, 216) 100%)",
            "linear-gradient(rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at center top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%)",
            "linear-gradient(to top, rgb(196, 113, 245) 0%, rgb(250, 113, 205) 100%)",
            "linear-gradient(to top, rgb(72, 198, 239) 0%, rgb(111, 134, 214) 100%)",
            "linear-gradient(to right, rgb(247, 140, 160) 0%, rgb(249, 116, 143) 19%, rgb(253, 134, 140) 60%, rgb(254, 154, 139) 100%)",
            "linear-gradient(to top, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
            "linear-gradient(to top, rgb(230, 233, 240) 0%, rgb(238, 241, 245) 100%)",
            "linear-gradient(to top, rgb(172, 203, 238) 0%, rgb(231, 240, 253) 100%)",
            "linear-gradient(-20deg, rgb(233, 222, 250) 0%, rgb(251, 252, 219) 100%)",
            "linear-gradient(to top, rgb(193, 223, 196) 0%, rgb(222, 236, 221) 100%)",
            "linear-gradient(to top, rgb(11, 163, 96) 0%, rgb(60, 186, 146) 100%)",
            "linear-gradient(to top, rgb(0, 198, 251) 0%, rgb(0, 91, 234) 100%)",
            "linear-gradient(to right, rgb(116, 235, 213) 0%, rgb(159, 172, 230) 100%)",
            "linear-gradient(to top, rgb(106, 133, 182) 0%, rgb(186, 200, 224) 100%)",
            "linear-gradient(to top, rgb(163, 189, 237) 0%, rgb(105, 145, 199) 100%)",
            "linear-gradient(to top, rgb(151, 149, 240) 0%, rgb(251, 200, 212) 100%)",
        ]

        if ( !$links.length ) return;

        $links.each( function () {
            $( this ).css( { background: colors[parseInt( Math.random() * 30 )] } )
        } )
    },
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( linksContext ).forEach( f => f() );
    } );
})();

