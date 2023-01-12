/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: categories
 * @Description: 分类
 */
import {dataFlat, drawEcharts} from './Utils'

class Categories {
  constructor() {

    this.drawChart();
  }

  drawChart() {
    window.drawEchartsDom = document.querySelector('.categories .categories-chart')

    if (!drawEchartsDom) return;

    const flat = dataFlat(CategoriesData, 'children');

    const sort = flat.sort((a, b) => a['postCount'] - b['postCount'])

    const data = sort.map((m) => {
      return {
        value: m['postCount'],
        name: m['spec']['displayName'],
        link: m['status']['permalink']
      }
    })

    window.drawEchartsOption = {
      backgroundColor: "",
      title: {
        text: "文章分类统计图📇",
        x: "center"
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      grid: {
        containLabel: true,
        bottom: "0%",
        left: "5%",
        right: "5%",
      },
      legend: {
        icon: "circle",
        y: "95%",
        bottom: "center",
      },
      series: [{
        name: "分类统计",
        type: "pie",
        radius: [40, 150],
        center: ["50%", "48%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        label: {
          formatter: "{b} : {c} ({d}%)"
        },
        data,
      }]
    };

    drawEcharts(dataTheme);
  }


}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.CategoriesClass = new Categories())
})();