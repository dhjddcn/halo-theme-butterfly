/**
 * @date: 2024/5/23
 * @author: 小红
 * @fileName: tags
 * @Description: 标签
 */

import {useChart, useRandomColor} from '../core/_util';
import {App} from '../core/_decorator';
import * as echarts from 'echarts';
import {LineChart, PieChart, GaugeChart} from 'echarts/charts';
import {TitleComponent, TooltipComponent, GridComponent, DataZoomComponent, GraphicComponent} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

// 注册所需的组件和渲染器
echarts.use([
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
  GaugeChart,
]);

@App([])
class Tags {

  // 渲染标签
  run_equinox() {
    const items = document.querySelectorAll('.tags .equinox  a.link');

    if(!items.length) return;

    const leg = items.length - 1;

    const source = [];

    items.forEach(function(dom, index) {
      let postCount = Number(dom.getAttribute('data-postCount') || 0);

      dom.style.color = useRandomColor();

      source.push([
        dom.innerText,
        postCount,
      ]);
    });

    this.chart(source);
  }

  /***
   * @desc: 图表
   */
  chart(source) {

    const chartDom = document.querySelector('.tags .content > .chart');

    if(!chartDom) return;

    source = source.sort((a, b) => b[1] - a[1]);

    source = source.length >= 10 ? source.slice(0, 10) : source;

    useChart.call(this, chartDom, () => {
      return {
        color: 'null',
        backgroundColor: '',
        title: {
          text: 'Top 10 标签统计图📌',
          x: 'center',
        },
        dataset: [
          {
            dimensions: ['name', 'count'],
            source,
          }, {
            transform: {
              type: 'sort',
              config: {
                dimension: 'count',
                order: 'desc',
              },
            },
          },
        ],
        tooltip: {},
        xAxis: {
          type: 'category',
        },
        yAxis: {
          name: '文章篇数',
          type: 'value',
          splitLine: {
            show: !1,
          },
          axisTick: {
            show: !1,
          },
          axisLine: {
            show: !0,
          },
        },
        series: {
          name: '标签统计',
          type: 'bar',
          encode: {
            x: 'name',
            y: 'count',
          },
          datasetIndex: 1,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#83bff6',
              }, {
                offset: .5,
                color: '#188df0',
              }, {
                offset: 1,
                color: '#188df0',
              },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2378f7',
                }, {
                  offset: .7,
                  color: '#2378f7',
                }, {
                  offset: 1,
                  color: '#83bff6',
                },
              ]),
            },
          },
          markPoint: {
            symbolSize: 45,
            data: [
              {
                type: 'max',
                itemStyle: {
                  color: '#425aef',
                },
                name: '最大值',
              }, {
                type: 'min',
                itemStyle: {
                  color: '#425aef',
                },
                name: '最小值',
              },
            ],
          },
          markLine: {
            itemStyle: {
              color: '#425aef',
            },
            data: [
              {
                type: 'average',
                name: '平均值',
              },
            ],
          },
        },
      };
    });
  }
}