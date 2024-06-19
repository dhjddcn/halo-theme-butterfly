/**
 * @date: 2024/6/19
 * @author: 小红
 * @fileName: categories
 * @Description: 分类
 */

import {App} from '../core/_decorator';
import * as echarts from 'echarts';
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
class Categories {

}
 
 
