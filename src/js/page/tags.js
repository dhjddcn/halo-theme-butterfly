/**
 * @date: 2024/5/23
 * @author: 小红
 * @fileName: tags
 * @Description: 标签
 */

import {App} from '../core/_decorator';
import * as echarts from 'echarts/core';
import {PieChart} from 'echarts/charts';
import {TitleComponent, TooltipComponent, GridComponent, DataZoomComponent} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

// 注册所需的组件和渲染器
echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
]);

@App([])
class Tags {
  /***
   * @desc: 图表
   */
  run_chart() {
    const chartDom = document.querySelector('.tags .content > .chart');

    if(!chartDom) return;

  }
}