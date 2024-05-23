/**
 * @date: 2024/4/30
 * @author: 小红
 * @fileName: archives
 * @Description:归档
 */

import {App} from '../core/_decorator';
import pagination from '../modules/pagination';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {TitleComponent, TooltipComponent, GridComponent, DataZoomComponent} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

// 注册所需的组件和渲染器
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
]);

@App([pagination])
class Archives {

  /***
   * @desc: 图表
   */
  run_chart() {
    const chartDom = document.querySelector('.archives .content > .chart');

    if(!chartDom) return;

    let chartIns = null;

    const data = [];

    for (let year of this.useConfig.archives) {
      for (let months of year['months']) {
        data.push([
          `${year['year']}-${months['month']}`,
          months['posts'].length,
        ]);
      }
    }

    const options = {
      color: ['#425aef'],
      title: {
        text: '归档统计📃',
        x: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(66,90,239,0.3)',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        name: '篇',
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          zlevel: 0,
          z: 2,
          name: '文章篇数',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: '#425aef',
            width: 1,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#425aef', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#FFFFFF', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          data, // 这里需要填入实际的数据
        },
      ],
    };

    const render = (theme, der) => {
      der && chartIns?.dispose();
      chartIns = echarts.init(chartDom, theme);
      chartIns.setOption(options);
    };

    render(this.useTheme.getMode());

    window.addEventListener('resize', chartIns.resize);

    this.useTheme.change((mode) => render(mode, true));
  }
}