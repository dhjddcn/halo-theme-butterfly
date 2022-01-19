/**
 * @Description: 分类
 * @author: 小红
 * @date: 2022/1/12
 * @fileName: by.categories
 */

const categoriesContext = {
    initTagBg() {
        const $categories = $( '.by_category' );
        const colors = [ '#F9EBEA', '#F5EEF8', '#D5F5E3', '#E8F8F5', '#FEF9E7', '#F8F9F9', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#FFF' ];
        if ( !$categories.length ) return;

        $categories.each( function () {
            $( this ).css( { background: colors[parseInt( Math.random() * 12 )] } )
        } )
    },
    chart() {
        const $categories = $( '.by_category' );

        if ( !$categories.length ) return;

        let c = echarts.init( document.getElementById( 'chart' ) );

        let dataNum = [];
        let indicator = $categories.map( function () {
            let max = parseInt( $( this ).attr( 'data-num' ) );
            dataNum.push( max );
            return {
                text: $( this ).attr( 'title' ),
                max
            }
        } )

        let legendData = [ '' ]; //图例
        let dataArr = [ {
            value: dataNum,
            // name: legendData[0],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#55d7f2',
                    },
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 1, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [ {
                            offset: 0,
                            color: '#49b1f5'
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0)'
                        } ],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }
        ];
        let colorArr = [ '#55d7f2', '#4BFFFC' ]; //颜色
        let option = {
            backgroundColor: '#fff',
            color: colorArr,
            legend: {
                orient: 'vertical',
                // icon: 'circle', //图例形状
                // data: legendData,
                top: 20,
                left: 20,
                itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
                itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
                itemGap: 22, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#00E4FF',
                },
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#34495e',
                        fontSize: 16
                    },
                },
                indicator: indicator,
                splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                    show: true,
                    areaStyle: { // 分隔区域的样式设置。
                        color: [ 'rgba(255,255,255,0)', 'rgba(255,255,255,0)' ], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                    }
                },
                axisLine: { //指向外圈文本的分隔线样式
                    lineStyle: {
                        color: '#537cce'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#adbcbf', // 分隔线颜色
                        width: 2, // 分隔线线宽
                    }
                },
            },
            series: [ {
                type: 'radar',
                symbolSize: 8,
                symbol: 'circle',
                data: dataArr
            } ]
        };
        c.setOption( option );
    }
};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( categoriesContext ).forEach( f => f() );
    } );
})();


