/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: tags
 * @Description: 标签
 */
import {drawEcharts} from '../base/utils'

class Tags {
  constructor() {
    this.tagList();
  }

  tagList() {
    const items = $('.tags-list > .tags-list-item');

    if (!items.length) return;

    const leg = items.length - 1;

    const source = [];

    items.each(function (index, dom) {
      let postCount = Number(dom.getAttribute('data-postCount') || 0);

      const ratio = postCount / leg;

      const minFontSize = 1.5;

      const maxFontSize = 2.5;

      const size = parseFloat((minFontSize + ((maxFontSize - minFontSize) * ratio)).toFixed(2));

      const color = 'rgb(' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ')';

      dom.style.fontSize = size + 'em';

      dom.style.color =  color;

      source.push([
        dom.innerText,
        postCount
      ])
    })

    const se = source.sort((a, b) => b[1] - a[1]);

    this.drawChart(se.length >= 10 ? se.slice(0, 10) : se);
    
  }

  drawChart(source) {
    window.drawEchartsDom = document.querySelector('.tags .tags-chart')

    if (!drawEchartsDom) return;

    window.drawEchartsOption = {
      color: "null",
      backgroundColor: "",
      title: {
        text: "Top 10 标签统计图📌",
        x: "center"
      },
      dataset: [{
        dimensions: ["name", "count"],
        source,
      }, {
        transform: {
          type: "sort",
          config: {
            dimension: "count",
            order: "desc"
          }
        }
      }],
      tooltip: {},
      xAxis: {
        type: "category"
      },
      yAxis: {
        name: "文章篇数",
        type: "value",
        splitLine: {
          show: !1
        },
        axisTick: {
          show: !1
        },
        axisLine: {
          show: !0
        }
      },
      series: {
        name: "标签统计",
        type: "bar",
        encode: {
          x: "name",
          y: "count"
        },
        datasetIndex: 1,
        itemStyle: {
          color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#83bff6"
          }, {
            offset: .5,
            color: "#188df0"
          }, {
            offset: 1,
            color: "#188df0"
          }])
        },
        emphasis: {
          itemStyle: {
            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#2378f7"
            }, {
              offset: .7,
              color: "#2378f7"
            }, {
              offset: 1,
              color: "#83bff6"
            }])
          }
        },
        markPoint: {
          symbolSize: 45,
          data: [{
            type: "max",
            itemStyle: {
              color: "#425aef"
            },
            name: "最大值"
          }, {
            type: "min",
            itemStyle: {
              color: "#425aef"
            },
            name: "最小值"
          }]
        },
        markLine: {
          itemStyle: {
            color: "#425aef"
          },
          data: [{
            type: "average",
            name: "平均值"
          }]
        }
      }
    };

    drawEcharts(dataTheme);
  }

}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.TagsClass = new Tags())
})();