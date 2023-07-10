/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: archives
 * @Description: 分类归档
 */
import {drawEcharts} from "../base/utils";


class Archives {
  constructor() {
    this.drawChart();
  }

  drawChart() {
    window.drawEchartsDom = document.querySelector('.archives .archives-chart');

    if (!drawEchartsDom) return;

    const data = [];

    for (let year of ArchivesData) {
      for (let months of year['months']) {
        data.push([`${year['year']}-${months['month']}`, months['posts'].length])
      }
    }

    window.drawEchartsOption = {
      color: ["#425aef"],
      title: {
        text: "文章发布统计📃",
        x: "center"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          shadowStyle: {
            color: "rgba(66,90,239,0.3)"
          }
        }
      },
      zlevel: 1,
      z: 1,
      xAxis: {
        type: "category",
        boundaryGap: false
      },
      yAxis: {
        name: "文章篇数",
        axisLine: {
          show: true
        }
      },
      series: [
        {
          name: "文章篇数",
          type: "line",
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "#425aef",
            width: 1
          },
          areaStyle: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#425aef"
                },
                {
                  offset: 1,
                  color: "#FFFFFF"
                }
              ],
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false
            }
          },
          data,
        }
      ]
    }

    drawEcharts(dataTheme);
  }

}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.ArchivesClass = new Archives())
})();