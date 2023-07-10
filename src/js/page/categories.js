/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: categories
 * @Description: 分类
 */
import {drawEcharts} from '../base/utils'

class Categories {
  constructor() {
    this.drawChart();
  }

  drawChart() {
    window.drawEchartsDom = document.querySelector('.categories .categories-chart');

    if (!drawEchartsDom) return;

    const categoriesList = $('.categories-list li');

    let data = [];

    categoriesList.each(function (index, item) {
      const t = $(this);
      const displayName = t.attr('data-displayName');
      const postCount = parseFloat(t.attr('data-postCount') || 0);
      data.push({value: postCount, name: displayName});
    })


    data = data.sort((a, b) => a['postCount'] - b['postCount'])

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