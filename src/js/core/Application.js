/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Application
 * @Description:核心
 */

import Message from './_message';
import Theme from './Theme';
import Scroll from './Scroll';
import Common from './Common';

export default class Application {
  useConfig = window.ThemeConfig; //配置
  useTheme = new Theme(this.useConfig.base.style.mode); //主题
  useCommon = new Common(this.useConfig.base); // 普通逻辑
  useMessage = new Message(); //消息
  useScroll = new Scroll(); //滚动导航侧边
}