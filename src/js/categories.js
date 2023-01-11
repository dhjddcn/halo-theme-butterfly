/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: categories
 * @Description: 分类
 */

class Categories {
  constructor() {

    this.drawChart();
  }

  drawChart() {
    const dom = document.querySelector('.categories-chart')

    if (!dom) return;

    const sort = CategoriesData.sort((a, b) => a['postCount'] - b['postCount'])

    const chart = window.echarts.init(dom, dataTheme);

    const option = {
      backgroundColor: "",
      title: {
        text: "文章分类统计图📇",
        x: "center"
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        icon: "circle",
        top: "bottom"
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
        data: [{
          name: "演示",
          value: 2
        }, {
          name: "算法",
          value: 24
        }, {
          name: "Java基础",
          value: 1
        }, {
          name: "计算机基础",
          value: 1
        }, {
          name: "数据库",
          value: 1
        }, {
          name: "魔改教程",
          value: 12
        }]
      }]
    };

    chart.setOption(option);

    window.addEventListener("resize", (() => chart.resize()));

  }


}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.CategoriesClass = new Categories())
})();